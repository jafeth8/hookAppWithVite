import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-UseState/CounterApp'
import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MultipleCustomHooks/>
  //</React.StrictMode>,
)
