import { useRef } from "react"

export const FocusScreen = () => {

  const refForm = useRef();

  const onclick=() => {
    console.log(refForm);
    refForm.current.select();
  }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
          type="text" 
          placeholder="Escribe tu nombre" 
          className="form-control"
          ref={refForm}
        />

        <button className="btn btn-primary mt-2" onClick={onclick}>set Focus</button>
    </>
  )
}
