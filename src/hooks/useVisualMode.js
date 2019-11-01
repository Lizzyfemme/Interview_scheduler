import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([]);
  const [mode, setMode] = useState(initial);

function transition(newMode){
  setHistory(history.concat(mode))
  setMode(newMode)

}
function back() { 
  transition(history.pop())
  setHistory(history)

 }

  return { mode, transition, back };
}



