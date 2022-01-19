import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionTypes, selectors } from '../../features/session'
import './index.scss'

// const login = () => {}

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectors.getUserInfo)

  const handleLogout = () => {
    dispatch({
      type: actionTypes.LOGOUT,
    })
  }

  return (
    <nav>
      <div className="nav-wrapper flex-center-between p-0-24">
        <div className="nav-link-button">{user.name}</div>
        <div className="nav-bar-title">我是标题</div>
        <div className="nav-link-button" onClick={handleLogout}>
          退出
        </div>
      </div>
    </nav>
  )
}

export default Navbar
