import React from 'react'
import Auth from '../../layouts/auth'
import SignupComponent from '../../components/forms/signup'

const Signup: React.FC = () => {
  return (
    <Auth>
      <SignupComponent />
    </Auth>
  )
}

export default Signup

