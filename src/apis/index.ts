import { IUserInfo } from '../models'

const API_HOST = 'https://lanhanghui-845ff7.postdemo.tcn.asia'
const fetch = window.fetch

const handleLogout = () => {
  location.href = '/login'
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
  if (res?.token) {
    return res
  }
  return null
}

export default {
  getUserInfo,
  login,
}
