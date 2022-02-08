import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost } from '../../models'
import apis from '../../apis'
import { dateFormatter } from '../../utils'
import { useDispatch } from 'react-redux'
import { actionTypes } from '../../features/session'
import './index.scss'

const Diary: React.FC = () => {
  const [post, setPost] = useState<IPost>({} as IPost)
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  useEffect(() => {
    apis.getPostById(id).then((data) => data && setPost(data))
  }, [id])

  React.useEffect(() => {
    dispatch({
      type: actionTypes.SET_TITLE,
      data: { title: post.title },
    })
  }, [post])

  return (
    <div className="p-0-24">
      <div className="diary-container">
        <div className="diary-header flex-center-between">
          <div className="diary-title">{post.title}</div>
          <div className="diary-time">{dateFormatter(post.updated_at)}</div>
        </div>
        <div className="diary-content">{post.content}</div>
      </div>
    </div>
  )
}

export default Diary
