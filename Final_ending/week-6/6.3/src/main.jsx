import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseMemo from './UseMemo.jsx'
import Memo from './Memo.jsx'

createRoot(document.getElementById('root')).render(
  <Memo/>
)
