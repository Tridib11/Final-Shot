import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextApiPractice from './ContextApiPractice'
import RecoilPractice from './RecoilPractice'
import Memo from './Memo'
import SelectorTesting from './SelectorTesting'




createRoot(document.getElementById('root')).render(
  <SelectorTesting/>
)
