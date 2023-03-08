import { ReactNode } from "react"
import Header from "./includes/header"

interface Props {
  children: ReactNode
}

const Default = ({children}: Props) => {
  return (
    <section className="px-5 bg-zinc-50">
      <div className="container mx-auto flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Header />
      </div>
    </section>
  )
}

export default Default