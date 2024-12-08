import React, { createContext, useState } from "react";


const BulbContext=createContext();
function App() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn:bulbOn,
        setBulbOn:setBulbOn
      }}>
        <Light />
      </BulbContext.Provider>
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb/>
      <LightSwitch />
    </div>
  );
}

function LightBulb({bulbOn}) {
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function LightSwitch({setBulbOn}) {
  return (
    <div>
      <button onClick={()=>{
        setBulbOn(currentState => !currentState)
      }}>Toggle Button</button>
    </div>
  );
}

export default App;
