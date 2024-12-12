import { useRef } from "react";

export const useDebounce = (originalFunction) => {
  const currentClock = useRef();
  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFunction, 3000);
  };

  return fn;
};