import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);
  

  const increment=useCallback(
    (incremento) => {
      
      //setCounter(counter + 1);  // no se puede dejar asi ya que se nemoizan los parametros con un valor fijo
      setCounter((value)=>value+incremento);
      
    },
    [],
  )
  

  /*const increment = () => {
    setCounter(counter + 1);
  };*/

  return (
    <>
      <h1>UseCallBack hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment}/>
    </>
    
  )
}
