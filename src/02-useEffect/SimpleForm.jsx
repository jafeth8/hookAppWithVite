import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({userName:"",email:""})
  
  const {userName,email}=formState
  
  const onInputChange=({target})=>{
    const {name,value}=target
    setFormState({...formState,[name]:value})
    //console.log(target.name)
  }

  useEffect(() => {
    //console.log("email changed");
  }, [email])
  

  return (
    <>
        
        <h1>formulario simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="user name"
            name="userName"
            value={userName}
            onChange={onInputChange} 
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="correo electronico"
            name="email"
            value={email}
            onChange={onInputChange}  
        />

        { (userName==='novato789') && <Message/> }

    </>
  )
}
