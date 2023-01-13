import { useState } from "react"

export const useCounter=(initialValue=0)=>{

    const [value, setValue] = useState(initialValue)

    const increment=(number)=>{
        setValue(value+number)
    }
    const decrement=(number)=>{
        setValue(value-number)
    }
    const reset=()=>{
        setValue(initialValue);
    }

    return {
        value,
        increment,
        decrement,
        reset
    }
}