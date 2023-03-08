import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"

interface Route {
  label: string
  url: string
}

const routes: Route[] = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' }
]


const Header: React.FC = () => {
  const location = useLocation()
  return (
    <div className='flex py-5'>
      <div className='grow'>
        Brow
      </div>
      <div className="shrink-0 flex gap-3">
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

export default Header