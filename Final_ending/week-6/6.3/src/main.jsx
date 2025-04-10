import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseMemo from './UseMemo.jsx'
import Memo from './Memo.jsx'
import Callback from './Callback.jsx'
import { Assignment2 } from './Assignment2.jsx'
import AssignmentCallback from './AssignmentCallback.jsx'
import AssignmentUseRef from './AssignmentUseRef.jsx'

createRoot(document.getElementById('root')).render(
  // <Callback/>
  // <Assignment2/>
  // <AssignmentCallback/>
  <AssignmentUseRef/>
)
