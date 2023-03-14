import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-daisyui'
import { gql, useMutation} from '@apollo/client'

type SignupFormProps = {
  onSignup: (data: {
    user_fullname: string
    user_email: string
    user_mobile: string
    password: string
  }) => void
}

type SignupFormState = {
  user_fullname: string
  user_email: string
  user_mobile: string
  password: string
}

const SignupComponent = (props: SignupFormProps) => {
  const [state, setState] = useState<SignupFormState>({
    user_fullname: '',
    user_email: '',
    user_mobile: '',
    password: ''
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setState((initialState) => ({...initialState, [name]: value}))
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSignup(state)
  }

  return (
    <div className='flex flex-col gap-5 max-w-lg mx-auto justify-center'>
      <div className='text-zinc-800 tracking-wide text-xl'>
        Sign up to Brow.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Full Name</span>
            </label>
            <input name='user_fullname' required type="text" placeholder="John Doe" className="input input-sm input-bordered bg-transparent w-full" onChange={handleChange} />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Email Address</span>
            </label>
            <input name='user_email' required type="email" placeholder="john@brow.com" className="input input-sm input-bordered bg-transparent w-full" onChange={handleChange} />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Mobile Number</span>
            </label>
            <input name='user_mobile' required type="number" placeholder="60123456789" className="input input-sm input-bordered bg-transparent w-full" onChange={handleChange} />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Password</span>
            </label>
            <input name='password' required type="password" className="input input-sm input-bordered bg-transparent w-full" onChange={handleChange} />
          </div>
          <Button size='sm'>Submit</Button>
          <div className='text-right text-sm'>
            Already a member? <Link to='/login' className='text-sky-500 duration-500 hover:text-zinc-400'>Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignupComponent