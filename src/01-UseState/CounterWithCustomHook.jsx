import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {
    
    const {value,increment,decrement,reset}=useCounter(0);

    return (
    <>
      <h1>Counter with hook: {value}</h1>
      <hr />
      <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
      <button className="btn btn-primary" onClick={()=>reset()}>reset</button>
      <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
    </>
  )
}
