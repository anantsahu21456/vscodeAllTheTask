import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Sera from './css/counter.module.css'

export default function useEffectHook() {

    let [count,setCount] = useState(0);

    useEffect (()=>
    {
        console.log("useEffect")
    })
    let updateCounter = ()=>
    {
        setCount(count+1)
    }
    let removeCounter = ()=>
    {
        setCount(count-1)
    }
 
  return (
    <div className={Sera.bhai}>
      <h1>count : {count} </h1>
      <button onClick={updateCounter}> + </button>
      <button onClick={removeCounter}> remove </button>

    </div>
  )
}
