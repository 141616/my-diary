import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import apis from '../../apis'
import { actionTypes } from '../../features/session'
import AuthContainer from './AuthContainer'
import './Login.scss'

const Signin: React.FC = () => {
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [error, setError] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(false)

  const history = useHistory()
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch({
      type: actionTypes.SET_TITLE,
      data: { title: '注册' },
    })
  }, [])

  const handleSignin = async () => {
    if (loading) {
      return
    }

    if (!name) {
      alert('请输入名字')
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

    const res = await apis.register({ name, email, password })
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
      <div className="signin-container">
        <div className="error-tips">{error}</div>

        <div className="signin-form auth-form">
          <div className="signin-form-item auth-form-item">
            <div className="form-label">名字</div>
            <input
              className="form-input"
              type="text"
              placeholder="名字..."
              value={name}
              disabled={loading}
              onChange={(e) => setName(e.target.value.trim())}
            />
          </div>

          <div className="signin-form-item auth-form-item">
            <div className="form-label">邮件地址</div>
            <input
              className="form-input"
              type="text"
              placeholder="邮件地址..."
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </div>

          <div className="signin-form-item auth-form-item">
            <div className="form-label">密码</div>
            <input
              className="form-input"
              type="password"
              placeholder="密码..."
              value={password}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
          </div>
        </div>

        <button
          disabled={loading}
          className="auth-btn login-btn"
          onClick={handleSignin}
        >
          注册
        </button>
        <div
          className="go-login"
          onClick={() => {
            history.push('/login')
          }}
        >
          已有帐号？去登录
        </div>
      </div>
    </AuthContainer>
  )
}

export default Signin
