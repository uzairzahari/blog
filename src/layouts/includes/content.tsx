import { ReactNode } from "react"

interface Props {
  className?: string,
  children: ReactNode
}

const Content = ({ className ,children }: Props) => {
  return (
    <main className={ `flex-1 py-10 min-h-screen ${className || ''}` }>
      {children}
    </main>
  )
}

export default Content