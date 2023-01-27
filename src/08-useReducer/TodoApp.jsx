import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";

import { TodoList } from "./TodoList";
import { todoReducer } from "./TodoReducer";


const initialState=[
    {
        id:new Date().getTime(),
        description:'aprender ingles',
        done:false
    },
    {
        id:new Date().getTime()*3,
        description:'aprender css',
        done:false
    }
];

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer,initialState);

  const handleOnNewTodo = (e) =>{
    console.log(e);
    dispatch({type:'addTodo',payload:e});
  }

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
