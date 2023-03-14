import React, { useState } from 'react'
import Auth from '../../layouts/auth'
import SignupComponent from '../../components/forms/signup'
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

const Signup: React.FC = () => {
  const [state, setState] = useState<ParentState>({ isLoggedIn: false })

  const handleSignup = (data: {
    user_fullname: string,
    user_email: string,
    user_mobile: string,
    password: string
  }) => { setState((initialState) => ({...initialState, isLoggedIn: true })) }

  return (
    <Auth>
      <SignupComponent onSignup={handleSignup}/>
    </Auth>
  )
}

export default Signup

