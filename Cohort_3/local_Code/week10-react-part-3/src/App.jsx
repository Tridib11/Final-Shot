import React, { useState } from "react";

function App() {
  return (
    <div>
      <LighBulb />
    </div>
  );
}

function LighBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({bulbOn}) {
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function ToggleBulbState({setBulbOn}) {
  return (
    <div>
      <button onClick={()=>{
        setBulbOn(currentState => !currentState)
      }}>Toggle Button</button>
    </div>
  );
}

export default App;
