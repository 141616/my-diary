/* eslint-disable @typescript-eslint/default-param-last */

import { SET_USERINFO, LOGOUT, SET_TITLE } from './actionTypes'
import { SessionActionTypes } from './types'

const initialState = {
  signed: true,
  user: null,
  navbarTitle: '我的日记',
}

export default (state = initialState, action: SessionActionTypes) => {
  switch (action.type) {
    case LOGOUT:
      localStorage.setItem('token', '')
      return { ...state, signed: false, user: null }
    case SET_USERINFO:
      return { ...state, signed: true, user: action.data.user }
    case SET_TITLE:
      return { ...state, navbarTitle: action.data.title }
    default:
      return state
  }
}
