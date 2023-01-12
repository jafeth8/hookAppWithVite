import { useState } from "react";

export const CounterApp = () => {

    const [state, setState] = useState({value1:0,value2:2,value3:4});

    return (
        <>
            <h1>value1: {state.value1}</h1>
            <h1>value2: {state.value2}</h1>
            <h1>value3: {state.value3}</h1>

            <hr />
            <button className="btn btn-success" onClick={()=>setState({...state,value1:state.value1+1 })}>value1:+1</button>
            <button className="btn btn-primary" onClick={()=>setState({...state,value2:state.value2+1})}>value2:+1</button>
            <button className="btn btn-secondary" onClick={()=>setState({...state,value3:state.value3+1})}>value3:+1</button>
        </>
    )
}
