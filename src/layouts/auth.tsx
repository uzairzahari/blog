import { ReactNode } from "react"
import { Link } from "react-router-dom"
import Content from "./includes/content"
interface Props {
  children: ReactNode
}

const Auth = ({children}: Props) => {
  return (
    <section className="bg-zinc-50">
      <div className="flex mx-auto">
        <Content className="hidden md:block bg-sky-500 max-w-xl">
          <div className="flex flex-col gap-5 mx-10 p-10">
            <Link to="/" className="text-2xl font-extrabold tracking-tighter">
              <span className="text-sky-900 duration-500 hover:text-sky-700 hover:tracking-wide">Brow.</span>
            </Link>
            <div className="text-xl font-black tracking-wider text-sky-700">
              Discover the world’s top<br />
              Content Creators.
            </div>
          </div>
        </Content>
        <Content className="w-100">
          <div className="p-10">
            {children}
          </div>
        </Content>
      </div>
    </section>
  )
}

export default Auth