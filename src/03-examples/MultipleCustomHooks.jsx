import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { UseFetch } from '../hooks/UseFetch'
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

  const {value,increment,reset}=useCounter(1)

  const nextQuote = ()=>{
    if(value>1) {
      reset();
    }else{
      increment(1);
    }  
    
  }

  const {data,isLoading,hasError}=UseFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${value}`);


  console.log({data,isLoading,hasError});
  
  //desestructuracion de data[0] daria error ya que inicialmente es null por eso se necesita la comprobacion !!data para comprobar que el
  //array es distinto de null y hacer la desestructuracion
  //(!null)=true (!!null)=false los valores desetruturado de false son = a undefined pero no da problemas, caso que si pasa con null
  const {quote,author} = !!data && data[0];

  return (
    <>
        <h1>Breaking bag quotes</h1>
        <hr />
        {
          isLoading ? (<LoadingQuote/>) : <Quote quote={quote} author={author}/>
        }    
        
        <button className='btn btn-primary' onClick={nextQuote}>mas frases</button>

    </>
  )
}
