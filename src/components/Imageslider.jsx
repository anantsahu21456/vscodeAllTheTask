import React, { useState } from "react";
import Anant from './css/imageslider.module.css'


let photo = ["https://m.media-amazon.com/images/I/51qSN54ArOL._AC_UL480_QL65_.jpg" ,
    "https://m.media-amazon.com/images/I/71jPv8MnnaL._AC_UL480_QL65_.jpg" ,
     "https://m.media-amazon.com/images/I/518kvtHhDqL._AC_UL480_QL65_.jpg" , 

     "https://m.media-amazon.com/images/I/91c10V2EIzL._AC_UL480_QL65_.jpg" , 
     "https://m.media-amazon.com/images/I/61QIfSoceLL._AC_UL480_QL65_.jpg"
    ];

function Imageslider() {
    
    let [Image,setImage] = useState(0)


    let Photobadhao = () => {
        setImage(Image===photo.length-1?0:Image+1)
      };

      let Photoghatao=()=>{
        setImage(Image===0?photo.length-1:Image-1)
      }
  return (
    <div className={Anant.mone}>
        {
            photo.map((element,index)=>
            Image===index &&
                 (
                    <img src={element} alt="" />
                )
            )
        }
        
      <button onClick={Photobadhao} >agee </button>
      <button onClick={Photoghatao} >peeche</button>
    </div>
  );
}

export default Imageslider;


