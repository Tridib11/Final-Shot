import React, { useState } from 'react'

function App() {
  return (
    <div>
      <LighBulb/>
    </div>
  )
}


function LighBulb(){
  return <div>
    <BulbState/>
    <ToggleBulbState/>
  </div>
}

function BulbState(){
  const [bulbOn,setBulbOn]=useState(true);
  return <div>
    {bulbOn?"Bulb On":"Bulb Off"}
  </div>
}

function ToggleBulbState(){
  return <div>
    <button>Toggle Button</button>
  </div>
}



export default App
