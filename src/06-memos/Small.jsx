//import { memo } from "react";

import React from "react";


//React.memo es la forma mas comun de ver que importar memo y utilizar la funcion
export const Small = React.memo(({value}) => {
  
  console.log("componente Small se volvio a dibujar :(");

  return (
    
    <small>{value}</small>
  )
})
