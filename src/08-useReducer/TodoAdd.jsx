import React from 'react'
//import { useState } from 'react';
import { UseForm } from '../hooks/UseForm';

export const TodoAdd = ({onNewTodo}) => {

  //const [value, setValue] = useState('');
  
  const {formState,onInputChange,onResetForm}=UseForm({description:''});

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(formState.description.length<=3) {
      alert('descripcion debe ser mayor a 3 letras')
      return
    }

    const todo={
      id: new Date().getTime(),
      description: formState.description,
      done:false

    };
    onNewTodo(todo);
    onResetForm();
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="que hay que hacer?"
            className="form-control"
            name='description'
            value={formState.description}
            onChange={onInputChange} 
        />

        <button type="submit" className="btn btn-outline-primary mt-1">
            agregar
        </button>
    </form>
  )
}
