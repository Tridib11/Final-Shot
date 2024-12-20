import React, { useState } from 'react'

import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './Components/Atoms'
function App() {
  return <div>
    <RecoilRoot>

      <Display/>
    </RecoilRoot>
  </div>
}


function Display(){
  const [count,setCount]=useState(0)

  const netwrokNotificationCount=useRecoilValue(networkAtom)
  const jobsNotificationCount =useRecoilValue(jobsAtom)
  const messagingNotificationCount =useRecoilValue(messagingAtom)
  const notificationCount =useRecoilValue(notificationAtom)
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)
  return (
    <div>
      <button>Home</button>
      <button>My Network ({netwrokNotificationCount})</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging({messagingNotificationCount})</button>
      <button>Notifications({notificationCount})</button>
      <button>Me({totalNotificationCount})</button>
    </div>
  )
}

export default App
