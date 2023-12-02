import React, { useState } from 'react'

function Practicecounter() {
    let [first,setfirst] = useState(0)

    let updatevalueincrese=()=>
    {
        setfirst(first + 1)
    }
    let updatevaluedecrese=()=>
    {
        setfirst(first - 1)
    }
  return (
    <div>
        <h1>count is now: {first}</h1>
        <button onClick={updatevaluedecrese} ><i class="fa fa-trash" aria-hidden="true"></i> decre.</button>
        <button onClick={updatevalueincrese} ><i class="fa fa-plus-square" aria-hidden="true"> pluse</i></button>
    </div>
    
  )
}

export default Practicecounter
