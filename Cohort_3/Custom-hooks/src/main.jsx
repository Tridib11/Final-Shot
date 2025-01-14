
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ComponentMountUnmount from './ComponentMountUnmount.jsx'
import DataFecthingHook from './DataFecthingHook.jsx';
import IsOnlineHook from './IsOnlineHook.jsx';

createRoot(document.getElementById('root')).render(
 
    <IsOnlineHook/>
);
