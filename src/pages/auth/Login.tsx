import * as React from 'react'
import { useHistory } from 'react-router-dom'
import apis from '../../apis'
import AuthContainer from './AuthContainer'
import './Login.scss'

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const history = useHistory()

  const handleLogin = async () => {
    const res = await apis.login({
      email,
      password,
    })

    if (res?.token) {
      localStorage.setItem('token', res.token)
      history.replace('/')
    }
  }

  return (
    <AuthContainer>
      <div className="login-container">
        <div className="error-tips">密码错误</div>
        <div className="login-form">
          <div className="login-form-item">
            <div className="form-label">邮件地址</div>
            <input
              className="form-input"
              type="text"
              placeholder="邮件地址..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.trim())
              }}
            />
          </div>
          <div className="login-form-item">
            <div className="form-label">密码</div>
            <input
              className="form-input"
              type="text"
              placeholder="密码..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value.trim())
              }}
            />
          </div>
        </div>
        <button className="auth-btn login-btn" onClick={handleLogin}>
          登录
        </button>
        <div className="go-signin">没有帐号？注册</div>
      </div>
    </AuthContainer>
  )
}

export default Login
