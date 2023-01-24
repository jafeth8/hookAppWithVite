import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-UseState/CounterApp'
import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useEfectLayout/Layout'
import { CallBackHook } from './06-memos/CallBackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'
import './index.css'

//import './08-useReducer/introReducer'
import { TodoApp } from './08-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp/>
  //</React.StrictMode>,
)
