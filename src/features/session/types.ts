import { IUserInfo } from '../../models'
import { LOGOUT, SET_USERINFO } from './actionTypes'

interface LogoutAction {
  type: typeof LOGOUT
}

interface SetUserAction {
  type: typeof SET_USERINFO
  data: {
    user: IUserInfo
  }
}

export type SessionActionTypes = LogoutAction | SetUserAction

export interface SystemState {
  session: {
    signed: boolean
    user: IUserInfo
  }
}
