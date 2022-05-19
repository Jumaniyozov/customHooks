import { memo, useCallback, useEffect, useState } from "react";
import useDebounce, { useThrottle } from "../hooks/useDebounce";
import useEventListener from "../hooks/useEventListener";

const SIZE = 10;

export const Point = memo(({ left, top, color }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: left - SIZE / 2,
        top: top - SIZE / 2,
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: color,
      }}
    />
  );
});

const INITIAL_POS = {
  clientX: 0,
  clientY: 0,
};

function DebounceListen() {
  const [lastPos, selectLastPos] = useState(INITIAL_POS);
  const debouncedPos = useDebounce(lastPos, 300);
  const throttledPos = useThrottle(lastPos, 300);

  const [path, setPath] = useState([]);
  const [debouncedPath, setDebouncedPath] = useState([]);
  const [throttledPath, setThrottledPath] = useState([]);

  useEventListener(
    "mousemove",
    useCallback((event) => {
      const { clientX, clientY } = event;
      const pos = { clientX, clientY };
      selectLastPos(pos);
      setPath((array) => [...array, pos]);
    }, [])
  );

  useEffect(() => {
    setDebouncedPath((array) => [...array, debouncedPos]);
  }, [debouncedPos]);

  useEffect(() => {
    setThrottledPath((array) => [...array, throttledPos]);
  }, [throttledPos]);

  return (
    <>
      {path.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#F88" />
      ))}
      
      {throttledPath.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#8F8" />
      ))}
      {debouncedPath.map((pos, index) => (
        <Point key={index} left={pos.clientX} top={pos.clientY} color="#88F" />
      ))}
    </>
  );
}

export default DebounceListen;
