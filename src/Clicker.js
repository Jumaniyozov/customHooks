import React, { useState } from "react";

export default function Clicker() {
  const [clicks, setClicks] = useState(0);
  const handleClick = (e) => setClicks(clicks + 1);
  return (
    <div>
      <button onClick={handleClick}>Click me! {clicks}</button>
    </div>
  );
}
