import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-daisyui'

const SignupComponent: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 max-w-lg mx-auto justify-center'>
      <div className='text-zinc-800 tracking-wide text-xl'>
        Sign up to Brow.
      </div>
      <form>
        <div className="flex flex-col gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-sm input-bordered bg-transparent w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Email Address</span>
            </label>
            <input type="email" placeholder="john@brow.com" className="input input-sm input-bordered bg-transparent w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Mobile Number</span>
            </label>
            <input type="number" placeholder="60123456789" className="input input-sm input-bordered bg-transparent w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-zinc-500">Password</span>
            </label>
            <input type="password" className="input input-sm input-bordered bg-transparent w-full" />
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