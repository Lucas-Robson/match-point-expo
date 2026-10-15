import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getFirebaseApp } from './config'

let authInstance

export function getFirebaseAuth() {
  if (authInstance) return authInstance

  const app = getFirebaseApp()

  try {
    authInstance = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    })
  } catch (error) {
    if (error?.code !== 'auth/already-initialized') throw error
    authInstance = getAuth(app)
  }

  return authInstance
}
