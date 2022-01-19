/* eslint-disable @typescript-eslint/default-param-last */

import { SET_USERINFO, LOGOUT } from './actionTypes'
import { SessionActionTypes } from './types'

const initialState = {
  signed: true,
  user: null,
}

export default (state = initialState, action: SessionActionTypes) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.setItem('token', '')
      return { ...state, signed: false, user: null }
    case SET_USERINFO:
      return { ...state, signed: true, user: action.data.user }
    default:
      return state
  }
}
