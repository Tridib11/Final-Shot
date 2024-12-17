import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>
        <div>Class 1</div>
        <div>Class 2</div>
        <div>Class 3</div>
      </div>
    </>
  )
}

export default App
