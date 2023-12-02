import React, { useState } from 'react'

function Practiceshowmorelesscontent() {
    let [content,setcontent] = useState(" ")

    let mone = [ 
        {
        id:1,
        about:"hy my name is anant,and im from madhya pradesh "
        },
        {
            id:2,
            about:"Lorem ipsum dolor sit, amet  llo officia cumque libero earum quconsectetur adipisicing elit. Iure, ipsa?"
        },
        {
            id:3,
            about:"virat kohli is indian batsman and some times they do bowling also and he have 263M followers in instagram"
        },
        {
            id:4,
            about:"rohit sharma is indian caption of cricket matchand batsman and some times they do bowling also and he have 36M followers in instagram " 
        },
]
    let showmorecontent=()=>
    {
        setcontent(mone.map((ele,about)=>
        {
            return <h4>{ele}, {about}</h4> 

        }))
        console.log(mone)
    }
     let showlesscontent=()=>
     {
        setcontent (  )
     }
  return (
    <div>
        <p> first question is that who is anant  <span><button onClick={showmorecontent} >show more</button></span>  <button onClick={showlesscontent} >show less</button></p> 

        <p> second question is that who is lorem  <span><button onClick={showmorecontent} >show more</button></span>  <button onClick={showlesscontent} >show less</button></p> 

        <p> third question is that who is virat kohli  <span><button onClick={showmorecontent} >show more</button></span>  <button onClick={showlesscontent} >show less</button></p> 

        <p> forth question is that who is rohit sharma  <span><button onClick={showmorecontent} >show more</button></span>  <button onClick={showlesscontent} >show less</button></p> 

    </div>
  )
}

export default Practiceshowmorelesscontent
