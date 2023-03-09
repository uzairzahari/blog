import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Content = ({ children }: Props) => {
  return (
    <main className="flex-1 py-10">
      {children}
    </main>
  )
}

export default Content