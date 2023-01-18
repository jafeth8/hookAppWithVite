import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
  
    const {value,increment}=useCounter(0);    
    const [show, setshow] = useState(true);
    return (
        <>
            <h1>Counter: <Small value={value}/> </h1>
            <hr />

            <button className='btn btn-primary' onClick={()=>{increment(1)}}>+1</button>

            <button className='btn btn-outline-primary ' onClick={()=>{setshow(!show)}}>hide/show {JSON.stringify(show)}</button>
        </>
    )
}
