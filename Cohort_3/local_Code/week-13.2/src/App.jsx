import React, { useState } from 'react'
import { SideBarToggle } from './Icons/SideBarToggle'


function App() {
  const [sidebarOpen,setSidebarOpen]=useState(true)
  return (
    <div className='flex'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <MainComponent sidebarOpen={sidebarOpen}/>
      
    </div>
  ) 
}


export function Sidebar({sidebarOpen,setSidebarOpen}){
  if(sidebarOpen){
    return <div className="w-80 h-screen bg-red-200 absolute">
      <div className='cursor-pointer hover:bg-slate-200' onClick={()=>{
        setSidebarOpen(!sidebarOpen)
      }}>
        <SideBarToggle/>
      </div>
    </div>
  }
  return <div className='fixed top-0 left-0'>
    <div className='cursor-pointer hover:bg-slate-200 text-black md:text-cyan-50' onClick={()=>{
        setSidebarOpen(!sidebarOpen)
      }}>
        <SideBarToggle/>
      </div>
  </div>

}


 function MainComponent(){
  return <div className="w-full">
    <div className="h-48 bg-black hidden md:block "></div>
    
    <div className="grid grid-cols-10 gap-8 p-8">
      <div className="h-96 rounded-2xl shadow bg-red-200 md:col-span-2 -translate-y-24 shadow-lg col-span-11 hidden md:block">

      </div>
      <div className="h-96 rounded-2xl shadow bg-green-200 md:col-span-5 shadow-lg col-span-11">

      </div>
      <div className="h-96 rounded-2xl shadow bg-yellow-200 md:col-span-3 shadow-lg col-span-11">

      </div>
    </div>
  </div>
}

export default App
