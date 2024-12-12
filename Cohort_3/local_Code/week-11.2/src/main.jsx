import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextApi from './ContextApi'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi/>
  </StrictMode>,
)
