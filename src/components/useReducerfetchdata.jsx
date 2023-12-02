import axios from 'axios';
import React, {useEffect,useReducer} from 'react'

let initializState=[];

let productsReducer = (currentState,action )=>
{
    switch(action.type)
    {
        case "FETCH_SUCCESS": return action.payload
    }
    return currentState;
}

function useReducerfetchdata() {
    let [ products,productsDispatcher] = useReducer(productsReducer,initializState);

    let getproducts = async()=>
    {
        try
        {
            let {data} = await axios.get("https://fakestoreapi.com/products")
            productsDispatcher({type:"FETCH_SUCCESS" , payload:data})
        }
        catch(err)
        {
            console.log(err)
        }
       
    }
    useEffect(()=>
    {
        getproducts();
    },[])

  return (
    <div>
      {
        products.map(({id,image})=>
        {
            return <img key={id} src={image} width="200px" height="200px" alt="" />
        })
      }
    </div>
  )
}

export default useReducerfetchdata
