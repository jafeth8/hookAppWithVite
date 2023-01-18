import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({quote,author}) => {

  const [size, setSize] = useState({width:0, height:0});

  const pRef = useRef();


  useLayoutEffect(() => {
    //console.log(pRef.current.getBoundingClientRect()); 
    const {width,height}=pRef.current.getBoundingClientRect(); // una vez se ha pintado el compoente se ejetuta esto
    setSize({width, height});
  }, [quote])//no tiene mucho sentido ya que el componente se ve a destruir y volver a crear (revisar el componente <Layout/>)


  return (
    <blockquote className="blockquote text-end" style={{display:'flex'}}>
        <p className='mb-1' ref={pRef}>{quote}</p>
        <footer className='blockquote-footer'>{author}</footer>
        <code>{JSON.stringify(size)}</code>
    </blockquote>
  )
}
