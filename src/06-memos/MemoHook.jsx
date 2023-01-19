import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'


const heavyTuff=(iteratorNumber=0)=>{
    for (let i = 0; i < iteratorNumber; i++) {
        console.log("ahi vamos");
    }

    return `${iteratorNumber} :ciclos`
}


export const MemoHook = () => {
  
    const {value,increment}=useCounter(1000);    
    const [show, setshow] = useState(true);

    const memorizeValue= useMemo(() => heavyTuff(value), [value]);

    return (
        <>
            <h1>Counter: <small>{value}</small> </h1>
            <hr />

            <h4>{memorizeValue}</h4>

            <button className='btn btn-primary' onClick={()=>{increment(1)}}>+1</button>

            <button className='btn btn-outline-primary ' onClick={()=>{setshow(!show)}}>hide/show {JSON.stringify(show)}</button>
        </>
    )
}
