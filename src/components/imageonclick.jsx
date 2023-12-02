import React, { useState } from 'react'

function ImageONclick() {

    let [link, setLink] = useState("https://cdn.pixabay.com/photo/2023/11/25/08/07/tree-8411271_1280.jpg")

    let getLink = (e) => {
        setLink(e.target.src)
    }

    return (
        <>

            1 <img onClick={getLink} height="200px" width="200px" src="https://cdn.pixabay.com/photo/2023/11/25/08/07/tree-8411271_1280.jpg" alt="" />
            2 <img onClick={getLink} height="200px" width="200px" src="https://cdn.pixabay.com/photo/2023/11/01/11/42/coast-8357312_1280.jpg" alt="" />
            3  <img onClick={getLink} height="200px" width="200px" src="https://cdn.pixabay.com/photo/2023/11/14/14/59/mountains-8387889_1280.jpg" alt="" />
<br />
            <div>   <img src={link} height="500px" width="400px" alt="" />
            </div>
        </>
    )
}

export default ImageONclick