import React, { useCallback, useState } from "react";

function AssignmentCallback() {
  const [count, setCount] = useState(0);

  const Increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const Decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <ButtonComponent Increment={Increment} Decrement={Decrement} />
    </div>
  );
}

const ButtonComponent = React.memo(({ Increment, Decrement }) => {
  console.log("COmponent rerendered");
  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
});
export default AssignmentCallback;
