import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='flex justify-center'>
        <div className='bg-orange-600'>Class 1</div>
        <div className='bg-orange-100'>Class 2</div>
        <div className='bg-lime-500'>Class 3</div>
      </div> */}
      {/* <div className='grid grid-cols-12'>
        <div className='md:bg-green-700 sm:bg-blue-600 col-span-5 bg-purple-600  '>Class 1</div>
        <div className='bg-red-400 col-span-5'>Class 2</div>
        <div className='bg-green-500 col-span-2'>Class 3</div>
      </div> */}
      <div className='grid grid-cols-12'>
        <div className='col-span-12 sm:col-span-5 bg-purple-600 '>Class 1</div>
        <div className='col-span-12 sm:col-span-5 bg-red-400 '>Class 2</div>
        <div className='col-span-12 sm:col-span-2 bg-green-500 '>Class 3</div>
      </div>
    </>
  )
}

export default App
