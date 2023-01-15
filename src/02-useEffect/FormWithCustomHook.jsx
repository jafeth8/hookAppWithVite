import { useEffect, useState } from "react"
import { UseForm } from "../hooks/UseForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {

  const {formState,onInputChange, onResetForm}=UseForm({userName:'',email:'',password:''})

  const {userName,email,password}=formState;

  return (
    <>
        
        <h1>formulario con custom hook</h1>
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

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={password}
            onChange={onInputChange}  
        />

        <button className="btn btn-primary mt-2" onClick={onResetForm}>borrar</button>

    </>
  )
}
