import { useEffect, useState } from "react"

export const UseFetch = (url) => {
    console.log(url)
    const [state, setState] = useState({data:null,isLoading:true,hasError:null})

    const getFetchRequest = async()=>{
        
        setState({...state,isLoading:true})

        const resp = await fetch(url)
        const data= await resp.json();

        setState({data,isLoading:false,hasError:null});

    }

    useEffect(()=>{
        getFetchRequest();
    },[url])

    return {
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.hasError
    }
}
