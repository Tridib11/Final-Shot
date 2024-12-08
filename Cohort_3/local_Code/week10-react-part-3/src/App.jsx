import React, { createContext, useContext, useState } from "react";

const BulbContext = createContext();
function App() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBulbOn: setBulbOn,
        }}
      >
        <Light />
      </BulbContext.Provider>
    </div>
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
  const {setBulbOn} = useContext(BulbContext)
  return (
    <div>
      <button
        onClick={() => {
          setBulbOn((currentState) => !currentState);
        }}
      >
        Toggle Button
      </button>
    </div>
  );
}

export default App;
