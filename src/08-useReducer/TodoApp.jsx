import { useEffect } from "react";
import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";

import { TodoList } from "./TodoList";
import { todoReducer } from "./TodoReducer";


const initialState=[

];

const init = ()=>{
    // json.parse de un elemento que no existe es null
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer,initialState,init);

  const handleOnNewTodo = (e) =>{
    console.log(e);
    dispatch({type:'addTodo',payload:e});
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  
  },[todos])
  

  return (
    <>
        <h1>Todo app 10, <small>pendientes:2</small></h1>
        <hr />

        <div className="row">

            <div className="col-7">
                <TodoList todos={todos}/>
            </div>


            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={(e)=>{handleOnNewTodo(e)}}/>
            </div>

        </div>


       

    </>
  )
}
