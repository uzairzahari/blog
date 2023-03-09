import { ReactNode } from "react"
import Header from "./includes/header"
import Content from "./includes/content"
import Footer from "./includes/footer"
interface Props {
  children: ReactNode
}

const Default = ({children}: Props) => {
  return (
    <section className="px-5 bg-zinc-50">
      <div className="container mx-auto flex flex-col min-h-screen">
        <Header />
        <Content>
          {children}
        </Content>
        <Footer />
      </div>
    </section>
  )
}

export default Default