import { useState } from 'react'
import { Button } from 'react-daisyui'

function About() {
  const [count, setCount] = useState(0)

  return (
    <div className="About">
      <h1>Vite + React</h1>
      <div className="">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/About.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default About