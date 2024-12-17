import React, { useEffect } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './Components/NewAtoms'
import axios from 'axios'

function Testing() {
  return (
    <div>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </div>
  )
}


function MainApp(){
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)
  useEffect(()=>{
    axios.get("http://localhost:3000/notification")
    .then(res=>{
      setNetworkCount(res.data)
    })
  },[])

  return <div>
    <button>Home</button>
    <button>My networks ({networkCount.network})</button>
    <button>Jobs ({networkCount.jobs})</button>
    <button>Messaging ({networkCount.messaging})</button>
    <button>Notifications ({networkCount.notifications})</button>
    
    <button>Me ({totalNotificationCount})</button>
  </div>
}

export default Testing
