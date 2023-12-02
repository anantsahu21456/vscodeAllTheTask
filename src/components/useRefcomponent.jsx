import React, { useRef } from 'react'

export default function UseRefcomponent() {
    let inputRef = useRef(null)

    let focusinput=()=>
    {
        inputRef.current.focus()
    }

    let btnRef = useRef()

    let pritData=()=>
    {
        btnRef.current.style.display="none"
        window.print();
        btnRef.current.style.display = "inline"

    }

  return (
    <div>
      <input 
      style={{width:"500px", height:"50px",
       margin:"50px auto" , border:"2px solid red",
       borderRadius:"10px" , paddingLeft:"10px",
       }}
        type="text" ref={inputRef} />
      <button style={{width:"80px", height:"40px",}} onClick={focusinput}> (⬅️) focus </button>

<div>
    <h1>top 10 share in share market </h1>
    <h3>1- reliance</h3>
    <h3>2- tatamotors</h3>
    <h3>3- tcs</h3>
    <h3>4- icici bank</h3>
    <h3>5- SBI bank</h3>
    <h3>6- bpcl</h3>
    <h3>7- wipro</h3>
    <h3>8- jiofin</h3>
    <h3>9- asianpaint</h3>
    <h3>10- tata steel</h3>
    <button onClick={pritData}> print </button>
</div>

    </div>

  )
}
