import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import apis from '../apis'
import LoadMore from '../components/LoadMore'
import { actionTypes } from '../features/session'
import { IPost } from '../models'
import { dateFormatter } from '../utils'
import './home.scss'

const PAGE_SIZE = 18

export const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [page, setPage] = useState<number>(1)
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true)

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    apis.getMyPosts(page, PAGE_SIZE).then((res) => {
      setPosts(res)
      setLoading(false)

      if (res.length === 0) {
        setCanLoadMore(false)
      }
    })
    dispatch({
      type: actionTypes.SET_TITLE,
      data: { title: '我的日记' },
    })
  }, [])

  const handleGoDetail = (id: string) => {
    history.push('/diary/' + id)
  }

  const handleGoCreate = () => {
    history.push('/create')
  }

  const handleLoadMore = async () => {
    console.log(loading)

    if (loading) {
      return
    }
    setLoading(true)
    const res = await apis.getMyPosts(page + 1, PAGE_SIZE)
    if (res.length > 0) {
      setPage(page + 1)
      setPosts([...posts, ...res])
    } else {
      setCanLoadMore(false)
    }
    setLoading(false)
  }

  return (
    <Fragment>
      <div className="post-card-grid">
        <div className="post-card-grid-item">
          <div className="post-card post-card-add" onClick={handleGoCreate}>
            +
          </div>
        </div>
        {posts.map((post) => {
          return (
            <div className="post-card-grid-item" key={post.id}>
              <div
                className="post-card"
                onClick={() => handleGoDetail(post.id)}
              >
                <div className="post-name">{post.title}</div>
                <div className="post-time">
                  {dateFormatter(post.updated_at)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <LoadMore onLoadMore={handleLoadMore} canLoadMore={canLoadMore} />
    </Fragment>
  )
}
