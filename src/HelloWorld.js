import React from "react";
import Clicker from "./Clicker";

export default function HelloWorld(props) {
  const { color } = props;
  const style = {
    color,
  };

  return (
    <div>
      <span style={style}><Clicker/></span>World
    </div>
  );
}
