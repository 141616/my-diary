import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import apis from '../../apis'
import { actionTypes } from '../../features/session'
import AuthContainer from './AuthContainer'
import './Login.scss'

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [error, setError] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(false)

  const history = useHistory()
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch({
      type: actionTypes.SET_TITLE,
      data: { title: '登录' },
    })
  }, [])

  const handleLogin = async () => {
    if (loading) {
      return
    }

    if (!email) {
      alert('请输入邮箱')
      return
    }
    if (!password) {
      alert('请输入密码')
      return
    }

    setLoading(true)

    const res = await apis.login({ email, password })
    if (res?.token) {
      localStorage.setItem('token', res.token)
      history.replace('/')
    } else if (res?.error) {
      setError(res.error)
    }

    setLoading(false)
  }

  return (
    <AuthContainer>
      <div className="login-container">
        <div className="error-tips">{error}</div>
        <div className="login-form auth-form">
          <div className="login-form-item auth-form-item">
            <div className="form-label">邮件地址</div>
            <input
              className="form-input"
              type="text"
              placeholder="邮件地址..."
              value={email}
              disabled={loading}
              onChange={(e) => {
                setEmail(e.target.value.trim())
              }}
            />
          </div>
          <div className="login-form-item auth-form-item">
            <div className="form-label">密码</div>
            <input
              className="form-input"
              type="password"
              placeholder="密码..."
              value={password}
              disabled={loading}
              onChange={(e) => {
                setPassword(e.target.value.trim())
              }}
            />
          </div>
        </div>
        <button
          disabled={loading}
          className="auth-btn login-btn"
          onClick={handleLogin}
        >
          登录
        </button>
        <div
          className="go-signin"
          onClick={() => {
            history.push('/signin')
          }}
        >
          没有帐号？注册
        </div>
      </div>
    </AuthContainer>
  )
}

export default Login
