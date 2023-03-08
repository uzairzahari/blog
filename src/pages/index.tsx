import { useState }  from 'react';
import Default from '../layouts/default';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Default>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Default>
  )
}

export default App
