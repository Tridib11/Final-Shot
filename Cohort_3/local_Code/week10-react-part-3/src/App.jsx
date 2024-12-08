import React, { createContext, useContext, useState } from "react";

const BulbContext = createContext();


function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <BulbProvider>
      <Light />
    </BulbProvider>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const {bulbOn} =useContext(BulbContext)
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function LightSwitch() {
  const {bulbOn,setBulbOn} = useContext(BulbContext)
  return (
    <div>
      <button onClick={()=>{
        setBulbOn(bulbOn=> !bulbOn)
      }}>
        Toggle Button
      </button>
      
    </div>
  );
}

export default App;
