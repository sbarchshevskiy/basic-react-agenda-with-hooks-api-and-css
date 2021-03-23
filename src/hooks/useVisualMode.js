import { useState } from 'react';



export default function useVisualMode (initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  const transition = (newMode, update = false) => {
    setMode(newMode)
    setHistory(prev => {
      if (!update) {
        return [...prev, newMode];
      }
      const updHisObj = [...prev];
      updHisObj.pop();
      updHisObj.push(newMode);
      return updHisObj;
    })
  }

  const back = (currentPos) => {
    currentPos = history.length;
    if (currentPos <= 1) {
      return;
    }
    let updHisObj;
    updHisObj = [...history];
    updHisObj.pop();
    let moveBack;
    moveBack = updHisObj[updHisObj.length - 1];
    setMode(moveBack);
    setHistory(updHisObj);

  }

  return  { mode, transition, back};

}