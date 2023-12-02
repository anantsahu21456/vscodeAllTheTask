import React, { useState } from 'react'

function Practicehideandshowimage() {
    let [photo,setphoto] = useState("https://cdn.pixabay.com/photo/2023/08/15/09/21/camera-8191564_1280.jpg")

    let imagehide=()=>
    {
        setphoto(false)
    }

    let imageshow=()=>
    {
       setphoto("https://cdn.pixabay.com/photo/2023/08/15/09/21/camera-8191564_1280.jpg")
    }
  return (
    <div>
        <img width={"100px"} height="100px" src={photo} alt="" />
      <button onClick={imagehide}>click me for hide</button>
      <button onClick={imageshow}>click me for show</button>
    </div>
  )
}

export default Practicehideandshowimage
