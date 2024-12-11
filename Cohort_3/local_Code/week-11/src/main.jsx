import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fetch from './Fetch'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Fetch/>
  </StrictMode>,
)
