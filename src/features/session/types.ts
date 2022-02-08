import { IUserInfo } from '../../models'
import { LOGOUT, SET_TITLE, SET_USERINFO } from './actionTypes'

interface LogoutAction {
  type: typeof LOGOUT
}

interface SetUserAction {
  type: typeof SET_USERINFO
  data: {
    user: IUserInfo
  }
}

interface SetTitle {
  type: typeof SET_TITLE
  data: {
    title: string
  }
}

export type SessionActionTypes = LogoutAction | SetUserAction | SetTitle

export interface SystemState {
  session: {
    signed: boolean
    user: IUserInfo
    navbarTitle: string
  }
}
