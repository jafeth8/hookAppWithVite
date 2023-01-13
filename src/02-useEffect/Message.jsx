import React, { useEffect, useState } from 'react'

export const Message = () => {
  
  const [coords, setCoords] = useState({x:0,y:0}); 

  const onMouseMove=({x,y}) => {
    console.log(`x:${x} y:${y}`);
    setCoords({x,y})
  }  

  useEffect(() => {
    
    window.addEventListener('mousemove',onMouseMove)
  
    return () => {
      //console.log('Message desmontado');
      window.removeEventListener('mousemove',onMouseMove);
    }
  }, [])
    

  return (
    <>
        <h3>Este usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
