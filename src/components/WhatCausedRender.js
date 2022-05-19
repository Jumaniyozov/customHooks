import { memo, useState } from "react";
import useWhatCausedRender from "../hooks/useWhatCausedRender";

const HeavyComponent = memo((props) => {
  useWhatCausedRender("HeavyComponent", props);

  return (
    <div>
      <div>Counter: {props.counter}</div>
      <div>Text: {props.text}</div>
    </div>
  );
});

export default function WhatCausedRender() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const clearLocalState = () => {
    setCounter(0);
    setText("");
  };

  return (
    <>
      <h2>What Cause Rerender</h2>
      <p>
        <button onClick={incrementCounter}>Increment counter</button>
        <button onClick={clearLocalState}>Clear local state</button>
      </p>
      <p>
        <input type="text" value={text} onChange={onTextChange} />
      </p>
      <HeavyComponent counter={counter} text={text} />
    </>
  );
}
