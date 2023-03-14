import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-daisyui'

type LoginFormProps = {
  onLogin: (data: {
    user_mobile: string
    password: string
  }) => void
}

type LoginFormState = {
  user_mobile: string
  password: string
}

const LoginComponent = (props: LoginFormProps) => {
  const [state, setState] = useState<LoginFormState>({
    user_mobile: '',
    password: ''
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setState((initialState) => ({...initialState, [name]: value}))
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onLogin(state)
  }

  return (
    <div className='flex flex-col gap-5 max-w-lg mx-auto justify-center'>
      <div className='text-zinc-800 tracking-wide text-xl'>
        Sign in to Brow.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Mobile Number</span>
            </label>
            <input name='user_mobile' required type="number" onChange={handleChange} placeholder="john@brow.com" className="input input-sm input-bordered bg-transparent w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Password</span>
            </label>
            <input name='password' required type="password" className="input input-sm input-bordered bg-transparent w-full" onChange={handleChange} />
          </div>
          <Button size='sm'>Submit</Button>
          <div className='text-right text-sm'>
            Not a member? <Link to='/sign-up' className='text-sky-500 duration-500 hover:text-zinc-400'>Sign up now</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginComponent