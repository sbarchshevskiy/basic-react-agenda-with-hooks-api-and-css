import { useState } from 'react';



export default function useVisualMode (initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  const transition = (newMode, update = false) => {
    if (setMode(newMode) && update === true){
      const historyCopy = [...history];
      historyCopy.pop();
      historyCopy.push(newMode)
      setHistory(historyCopy);
    } 
    
  }

  const back = (currentPos, prevPos) => {
    currentPos = history.length;
    if (currentPos > 1) {
      const historyCopy = [...history];
      historyCopy.pop();
      historyCopy.push(prevPos);
      setHistory(historyCopy);
    }
    
  }

  return  { mode, transition, back };

}