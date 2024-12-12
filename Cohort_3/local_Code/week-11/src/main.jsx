import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Test from './Test'
// import TestingUsePrev from './TestingUsePrev'


// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <CustomHooks/> */}
   {/* <TestingUsePrev/> */}
   <Test/>
    
  </StrictMode>,
)
