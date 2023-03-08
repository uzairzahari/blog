import React, { useState }  from 'react';
import { Button, Card } from 'react-daisyui';

function About() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-auto">
      <Card className='max-w-md px-4 py-5 bg-zinc-700 flex flex-col gap-4'>
        <h1>Vite + React</h1>
        <div className="flex flex-col gap-4 max-w-md">
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
      </Card>
    </div>
  )
}

export default About
