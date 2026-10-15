import { createMemoryRepositories } from './memory/index.js'

export function createRepositories(options = {}) {
  const provider = options.provider ?? process.env.EXPO_PUBLIC_DATA_PROVIDER ?? 'memory'

  if (provider === 'memory') {
    return createMemoryRepositories(options.seed)
  }

  throw new Error(`Provedor de dados ainda não configurado: ${provider}`)
}
