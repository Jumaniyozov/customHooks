import { useState, useEffect, useRef } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const intervalHandler = setInterval(() => {
      setThrottledValue(valueRef.current);
    }, delay);

    return () => {
      clearInterval(intervalHandler);
    };
  }, [delay]);

  return throttledValue;
}

export default useDebounce;
