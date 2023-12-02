import React from 'react'
import { useState } from 'react'


let s = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit porro consequatur dolorum saepe nulla officiis amet, quia laudantium alias inventore numquam soluta aspernatur magni nemo quasi, distinctio eos voluptates non."
export default function HideAndShowimage() {

  let [isbool, setisbool] = useState(true);


  let toggleText = () => {
    setisbool(!isbool)
  }

  //   let hideimage=()=>
  //   {
  //     setisbool(true)
  //   }
  //   let showimage=()=>
  //   {
  //     setisbool(false)
  //   }

  return (
    <div>
      <p>
        {isbool ? s.slice(0, 200) : s}
        <button onClick={toggleText}>{isbool ? "read more" : "read less"}</button>
      </p>
    </div>
  )
}
