import { useState } from "react";

//This function manages the calls from the stack

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([]);
  const [mode, setMode] = useState(initial);

  // The transition function adds a mode to the call stack
  function transition(newMode) {
    setHistory(history.concat(mode));
    setMode(newMode);
  }
  // The back function removes a move from the call stack
  function back() {
    const historyClone = [...history];
    transition(historyClone.pop());

    setHistory(prev => [...prev, mode]);
  }

  return { mode, transition, back };
}
