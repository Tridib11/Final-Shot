import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './Components/NewAtoms'
import axios from 'axios'

function Testing() {
  return (
    <div>
      
    </div>
  )
}


function MainApp(){
  const [networkCount,setNetworkCount]=useRecoilState(notifications)
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)
  useEffect(()=>{
    axios.get("http://localhost:3000/notification")
    .then(res=>{
      setNetworkCount(res.data)
    })
  },[])
}

export default Testing
