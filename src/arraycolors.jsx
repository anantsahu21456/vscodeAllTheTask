import React, { useState } from 'react'

export default function arraycolors() {
    let colors =  ["red", "green", "yellow", "white"]
    let empty = [ ]
     
    let [color, setColor] = useState(empty);


    let toggleimage=()=>
    {
        if (color===empty)
        return setColor.(colors)
        

    }
    // let showColor=()=>
    // {
    //     setColor([colors])
    // }
  return (
    <div>
    <button onClick={toggleimage}> add color </button>
    {/* <button onClick={showColor}> one more</button> */}
    </div>
  )
}
