import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"

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
  { label: 'Login', url: '/login' }
]

const HeaderNoAuth: React.FC = () => {
  const location = useLocation()
  return (
    <div className='flex items-center py-5'>
      <div className="grow flex items-center gap-12">
        <Link to="/" className='font-bold text-xl tracking-tight text-zinc-900 duration-500 hover:tracking-wide'>
          Brow.
        </Link>
      </div>
      <div className="shrink-0 hidden md:flex gap-5">
          {routes.map((route) => (
            <span key={route.url}>
              <Link
                to={route.url}
                className={`font-semibold ${route.url === location.pathname ? 'text-zinc-900' : 'text-zinc-500'}`}
              >
                  {route.label}
              </Link>
            </span>
          ))}
        </div>
    </div>
  )
}

export default HeaderNoAuth