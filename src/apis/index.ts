import { IPost, IUserInfo } from '../models'

const API_HOST = 'https://lanhanghui-845ff7.postdemo.tcn.asia'
const fetch = window.fetch

const handleLogout = () => {
  location.href = '/login'
}

const handleAuthResponse = (res: any) => {
  if (res?.token) {
    return {
      token: res.token as string,
    }
  }

  if (res?.error) {
    return {
      error: res.error as string,
    }
  }

  return null
}

const get = async (url: string) => {
  const fetchData = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authsessiontoken: localStorage.getItem('token') || '',
    },
  })

  if (fetchData.status === 401) {
    handleLogout()
  }

  const response = await fetchData.json()
  return response
}

const post = async (url: string, data?: any) => {
  const fetchData = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authsessiontoken: localStorage.getItem('token') || '',
    },
    body: JSON.stringify(data),
  })

  if (fetchData.status === 401) {
    handleLogout()
  }

  const response = await fetchData.json()
  return response
}

const getUserInfo = async () => {
  const res = await get(`${API_HOST}/api/v2/users/me`)
  if (res?.id) {
    return res as IUserInfo
  } else {
    return null
  }
}

const login = async (data: { email: string; password: string }) => {
  const res = await post(`${API_HOST}/api/v2/auth/login`, data)
  return handleAuthResponse(res)
}

const register = async (data: {
  email: string
  password: string
  name: string
}) => {
  const res = await post(`${API_HOST}/api/v2/auth/register`, data)
  return handleAuthResponse(res)
}

const getMyPosts = async (page: number, count: number) => {
  const res = await get(
    `${API_HOST}/api/v2/users/me/posts?page=${page}&count=${count}`
  )
  if (Array.isArray(res)) {
    return res as Array<IPost>
  } else {
    return []
  }
}

const getPostById = async (id: string) => {
  const res = await get(`${API_HOST}/api/v2/posts/${id}`)

  if (res?.id) {
    return res as IPost
  } else {
    return null
  }
}

const createPost = async (data: { title: string; content: string }) => {
  const res = await post(`${API_HOST}/api/v2/posts`, data)
  if (res?.id) {
    return res as IPost
  } else {
    return null
  }
}

export default {
  getUserInfo,
  login,
  register,
  getMyPosts,
  getPostById,
  createPost,
}
