import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import { Home } from './pages/Home'
import Diary from './pages/diary'
import CreateDiary from './pages/create'
import Login from './pages/auth/Login'
import Signin from './pages/auth/Signin'

import './app.scss'
import PrivateRoute from './components/PrivateRoute'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <div className="container">
        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/create" component={CreateDiary} />
          <Route path="/diary/:id" component={Diary} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
