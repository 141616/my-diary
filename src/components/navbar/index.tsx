import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { actionTypes, selectors } from '../../features/session'
import './index.scss'

// const login = () => {}

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectors.getUserInfo)
  const title = useSelector(selectors.getNavbarTitle)
  const location = useLocation()
  const history = useHistory()

  // 当前是否首页
  const isHome = location.pathname === '/'
  // 当前是否登录/注册页
  const isAuth = ['/login', '/signin'].includes(location.pathname)

  const handleLogout = () => {
    dispatch({
      type: actionTypes.LOGOUT,
    })
    history.push('/login')
  }

  const handleBack = () => {
    history.push('/')
  }

  // 根据不同的pathname加载不同的按钮
  const name = <div className="user-name">{user.name || ''}</div>
  const back = (
    <div className="nav-link-button" onClick={handleBack}>
      退回
    </div>
  )
  const logout = (
    <div className="nav-link-button" onClick={handleLogout}>
      退出
    </div>
  )

  return (
    <nav>
      <div className="nav-wrapper flex-center-between p-0-24">
        {isAuth ? <div></div> : isHome ? name : back}
        <div className="nav-bar-title">{title}</div>
        {isAuth ? <div></div> : logout}
      </div>
    </nav>
  )
}

export default Navbar
