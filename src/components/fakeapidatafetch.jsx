// import React, { useEffect, useState } from 'react'
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Mone from './css/fakeapidatafetch.module.css'

export default function Fakeapidatafetch() {

    let [Data,setData] = useState([])

    useEffect(()=>
    {
        async function fakeapi()
        {

            let anant = await fetch("https://fakestoreapi.com/products")
            anant = await anant.json();
            setData(anant)
        }
        fakeapi()
    },[])
    // console.log(data)

  return (
    <div className={Mone.paltu}>
      {/* <ul> */}
        {
            Data.map(({id,title,price,description,category,image})=>{
                return <div className={Mone.listwala} >
                    <li key={id}>
                    <h3>{title}</h3>
                    <img width="250px" height="240px" src={image} alt="" />
                    <h3>{price}</h3>
                    <p>{description}</p>
                    <p>{category}</p>
                    
                    {/* <h5>{rating}</h5> */}

                </li>
                </div>
            }
            
            )
        }
      {/* </ul> */}
    </div>
  )
}
