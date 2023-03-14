import React, { useState } from 'react'
import Auth from '../../layouts/auth'
import LoginComponent from '../../components/forms/login'
import { gql, useMutation} from '@apollo/client'

export const LOGIN = gql`
  mutation Login($user_mobile: String!, $password: String!) {
    login(user_mobile: $user_email, password: $password) {
      id
      token
      user_email
      user_fullname
    }
  }
`

interface ParentState {
  isLoggedIn: boolean
}

const Login: React.FC = () => {
  const [state, setState] = useState<ParentState>({ isLoggedIn: false })

  const handleLogin = (data: {
    user_mobile: string,
    password: string
  }) => { setState((initialState) => ({...initialState, isLoggedIn: true })) }

  return (
    <Auth>
      <LoginComponent onLogin={handleLogin} />
    </Auth>
  )
}

export default Login

