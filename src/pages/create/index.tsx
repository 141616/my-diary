import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import apis from '../../apis'
import { actionTypes } from '../../features/session'
import './index.scss'

const CreateDiary: React.FC = () => {
  const [title, setTitle] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(false)

  const history = useHistory()
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch({
      type: actionTypes.SET_TITLE,
      data: { title: '新建日记' },
    })
  }, [])

  const handleSubmit = async () => {
    if (loading) {
      return
    }

    setLoading(true)

    const res = await apis.createPost({
      title,
      content,
    })
    if (res?.id) {
      history.push('/')
    }

    setLoading(false)
  }

  return (
    <div className="p-0-24">
      <div className="create-diary-container">
        <div className="diary-form">
          <div className="form-item post-title">
            <div className="form-label">标题</div>
            <div className="form-input">
              <input
                type="text"
                placeholder="日记条目标题..."
                value={title}
                disabled={loading}
                onChange={(e) => {
                  setTitle(e.target.value.trim())
                }}
              />
            </div>
          </div>
          <div className="form-item post-content">
            <div className="form-label">内容</div>
            <div className="form-input">
              <textarea
                name="post_content"
                placeholder="日记条目内容..."
                id="post_content"
                rows={8}
                value={content}
                disabled={loading}
                onChange={(e) => {
                  setContent(e.target.value)
                }}
              ></textarea>
            </div>
          </div>

          <div className="form-item submit">
            <button className="submit-button" onClick={handleSubmit}>
              提交
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateDiary
