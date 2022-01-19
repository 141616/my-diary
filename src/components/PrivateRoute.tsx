import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, RouteProps } from 'react-router-dom'
import apis from '../apis'
import { actionTypes, selectors } from '../features/session'

const PrivateRoute = (props: RouteProps) => {
  const signed = useSelector(selectors.getUserSigned)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const init = async () => {
      const user = await apis.getUserInfo()
      if (user) {
        dispatch({
          type: actionTypes.SET_USERINFO,
          data: { user },
        })
      }
    }
    init()
  }, [])

  if (!signed) {
    return null
  }

  return <Route {...props} />
}

export default PrivateRoute
