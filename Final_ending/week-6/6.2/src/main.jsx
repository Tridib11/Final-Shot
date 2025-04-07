import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Memo from './Memo.jsx'
import Test from './Test.jsx'
import MemoTest from './MemoTest.jsx'

createRoot(document.getElementById('root')).render(
  
    // <Memo/>
    <MemoTest/>
)
