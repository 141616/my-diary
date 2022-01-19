import * as React from 'react'
import GirlIcon from '../../assets/girl-icon.png'
import './AuthContainer.scss'

interface AuthProps {}

const AuthContainer: React.FC<React.PropsWithChildren<AuthProps>> = (props) => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <img className="auth-icon" src={GirlIcon} alt="girl-icon" />
        {props.children}
      </div>
    </div>
  )
}

export default AuthContainer
