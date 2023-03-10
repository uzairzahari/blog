import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Button } from 'react-daisyui'
import { PencilIcon } from '@heroicons/react/24/solid'

interface Route {
  label: string
  url: string
}

const routes: Route[] = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Pricing', url: '/pricing' }
]

const auth: Route[] = [
  { label: 'Login', url: '/login' },
  { label: 'Sign Up', url: '/sign-up'}
]

const Write = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} color='ghost' size='sm' variant='outline'>
        {isHovered && <PencilIcon className='h-3 w-3 mr-3 duration-300' />}
        Write
    </Button>
  );
}

const Header: React.FC = () => {
  const location = useLocation()
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown mr-5">
          <label tabIndex={0} className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="bg-zinc-50 menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
            {routes.map((route) => (
                <li>
                  <Link
                    to={route.url}
                    className={`font-semibold ${route.url === location.pathname ? 'text-zinc-900' : 'text-zinc-500'}`}
                  >
                      {route.label}
                  </Link>
                </li>
            ))}
          </ul>
        </div>
        <Link to="/" className='normal-case text-xl tracking-tight text-zinc-900 duration-500 hover:tracking-wider'>
          Brow.
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map((route) => (
            <li>
              <Link
                to={route.url}
                className={`text-sm font-semibold ${route.url === location.pathname ? 'text-zinc-900' : 'text-zinc-500'}`}
              >
                  {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-5">
          <div className="dropdown">
            <label tabIndex={0}>
              <div className="cursor-pointer w-7 h-7 rounded-full ring ring-offset-base-100 ring-offset-2 overflow-hidden">
                <img src="https://images.pexels.com/photos/15517285/pexels-photo-15517285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </div>
            </label>
            <ul tabIndex={0} className="bg-zinc-50 menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
              {auth.map((route) => (
                  <li>
                    <Link
                      to={route.url}
                      className={`font-semibold ${route.url === location.pathname ? 'text-zinc-900' : 'text-zinc-500'}`}
                    >
                        {route.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
          <Button size='sm' variant='outline'>Write</Button>
        </div>
      </div>
    </div>
  )
}

export default Header