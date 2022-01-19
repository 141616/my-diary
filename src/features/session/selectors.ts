import { SystemState } from './types'

export const getUserSigned = (state: SystemState) => {
  return state.session.signed
}

export const getUserInfo = (state: SystemState) => {
  return state.session.user || {}
}
