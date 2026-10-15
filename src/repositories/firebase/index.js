import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { USER_TYPES, REPOSITORY_ERROR_CODES } from '../../domain/contracts'
import { getFirebaseAuth } from '../../services/firebase/auth'
import { getFirebaseDatabase } from '../../services/firebase/config'

const USERS_COLLECTION = 'usuarios'

function success(data) {
  return { ok: true, data }
}

function failure(code, message, details) {
  return { ok: false, codigo: code, mensagem: message, ...(details ? { detalhes: details } : {}) }
}

function now() {
  return new Date().toISOString()
}

function mapFirebaseError(error) {
  const code = error?.code ?? ''

  if (code.startsWith('auth/')) {
    if (code === 'auth/invalid-credential' || code === 'auth/user-not-found' || code === 'auth/wrong-password') {
      return failure(REPOSITORY_ERROR_CODES.INVALID_DATA, 'E-mail ou senha inválidos.')
    }

    if (code === 'auth/email-already-in-use') {
      return failure(REPOSITORY_ERROR_CODES.INVALID_DATA, 'Este e-mail já possui uma conta.')
    }

    if (code === 'auth/weak-password') {
      return failure(REPOSITORY_ERROR_CODES.INVALID_DATA, 'A senha informada não atende aos requisitos mínimos.')
    }

    return failure(REPOSITORY_ERROR_CODES.INVALID_DATA, 'Não foi possível concluir a autenticação.', { firebaseCode: code })
  }

  if (code === 'permission-denied') {
    return failure(REPOSITORY_ERROR_CODES.FORBIDDEN, 'Você não possui permissão para realizar esta operação.')
  }

  return failure(REPOSITORY_ERROR_CODES.NETWORK_ERROR, 'Não foi possível acessar o Firebase. Tente novamente.', { firebaseCode: code || undefined })
}

function normalizeUser(id, data) {
  return { id, ...data }
}

export function createFirebaseRepositories() {
  const auth = getFirebaseAuth()
  const database = getFirebaseDatabase()

  const getUserById = async (id) => {
    try {
      const snapshot = await getDoc(doc(database, USERS_COLLECTION, id))

      if (!snapshot.exists()) {
        return failure(REPOSITORY_ERROR_CODES.NOT_FOUND, 'Perfil do usuário não encontrado.')
      }

      return success(normalizeUser(snapshot.id, snapshot.data()))
    } catch (error) {
      return mapFirebaseError(error)
    }
  }

  const authentication = {
    cadastrar: async (email, password, type, initialData = {}) => {
      if (!email || !password || !Object.values(USER_TYPES).includes(type)) {
        return failure(REPOSITORY_ERROR_CODES.INVALID_DATA, 'E-mail, senha e tipo de usuário são obrigatórios.')
      }

      try {
        const credential = await createUserWithEmailAndPassword(auth, email.trim(), password)
        const user = {
          id: credential.user.uid,
          email: credential.user.email ?? email.trim(),
          tipo: type,
          nome: initialData.nome?.trim() || initialData.nomeExibicao?.trim() || '',
          telefone: initialData.telefone?.trim() || null,
          fotoUrl: null,
          criadoEm: now(),
          atualizadoEm: now(),
        }

        await setDoc(doc(database, USERS_COLLECTION, credential.user.uid), user)
        return success(user)
      } catch (error) {
        return mapFirebaseError(error)
      }
    },

    entrar: async (email, password) => {
      if (!email || !password) {
        return failure(REPOSITORY_ERROR_CODES.INVALID_DATA, 'E-mail e senha são obrigatórios.')
      }

      try {
        const credential = await signInWithEmailAndPassword(auth, email.trim(), password)
        return getUserById(credential.user.uid)
      } catch (error) {
        return mapFirebaseError(error)
      }
    },

    sair: async () => {
      try {
        await signOut(auth)
        return success(null)
      } catch (error) {
        return mapFirebaseError(error)
      }
    },

    recuperarSenha: async (email) => {
      if (!email) {
        return failure(REPOSITORY_ERROR_CODES.INVALID_DATA, 'Informe o e-mail para recuperar a senha.')
      }

      try {
        await sendPasswordResetEmail(auth, email.trim())
        return success({ solicitado: true })
      } catch (error) {
        return mapFirebaseError(error)
      }
    },

    obterSessaoAtual: async () => {
      if (!auth.currentUser) return success(null)
      return getUserById(auth.currentUser.uid)
    },

    observarSessao: (callback) => onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        callback(null)
        return
      }

      const result = await getUserById(firebaseUser.uid)
      callback(result.ok ? result.data : null)
    }),
  }

  const users = {
    obterUsuario: getUserById,
    obterUsuarioAtual: async () => {
      if (!auth.currentUser) {
        return failure(REPOSITORY_ERROR_CODES.UNAUTHENTICATED, 'Nenhuma sessão ativa.')
      }

      return getUserById(auth.currentUser.uid)
    },
    atualizarUsuario: async (id, data) => {
      try {
        await updateDoc(doc(database, USERS_COLLECTION, id), {
          ...data,
          id,
          atualizadoEm: now(),
        })
        return getUserById(id)
      } catch (error) {
        return mapFirebaseError(error)
      }
    },
  }

  return { authentication, users }
}
