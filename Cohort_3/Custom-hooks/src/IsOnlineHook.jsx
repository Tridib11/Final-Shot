import React, { useEffect, useState } from 'react'


function useIsOnline(){
  const [isOnline,setIsOnline]=useState(window.navigator.onLine)

  useEffect(()=>{
    window.addEventListener("online",()=>{
      setIsOnline(true)
    })

    window.addEventListener("offline",()=>{
      setIsOnline(false)
    })
  },[])

  return isOnline
}
function IsOnlineHook() {

  const isOnLine=useIsOnline()
  return (
    <div>
      {isOnLine?alert("Online"):alert("Offline")}
    </div>
  )
}

export default IsOnlineHook
