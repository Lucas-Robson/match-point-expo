import { USER_TYPES } from '../domain/contracts'

const HOME_ROUTE_BY_USER_TYPE = Object.freeze({
  [USER_TYPES.ATHLETE]: 'homeAthlete',
  [USER_TYPES.TRAINER]: 'homeTrainer',
  [USER_TYPES.INSTITUTION]: 'homeInstitution',
})

export function getHomeRouteForUser(user) {
  return HOME_ROUTE_BY_USER_TYPE[user?.tipo] ?? null
}
