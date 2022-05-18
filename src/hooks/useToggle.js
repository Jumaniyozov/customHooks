import { useReducer } from "react";
import { useCallback } from "react";
import { useState } from "react";

function useToggle(initialValue) {
  const reducer = (state) => !state;
  return useReducer(reducer, initialValue || false);
}

function ToggleButton({ toggled, handleToggle }) {
  const caption = toggled ? "ON" : "OFF";
  return (
    <button style={{ width: 100 }} onClick={handleToggle}>
      {caption}
    </button>
  );
}
