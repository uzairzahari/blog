import React from 'react'
import Auth from '../../layouts/auth'
import LoginComponent from '../../components/forms/login'

const Login: React.FC = () => {
  return (
    <Auth>
      <LoginComponent />
    </Auth>
  )
}

export default Login

