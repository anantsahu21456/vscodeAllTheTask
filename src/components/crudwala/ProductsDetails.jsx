import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from './Modal'
import axios from 'axios'


function ProductDetails() {

    let [product,setProducts]=useState({})
    let {pid}=useParams()

    let getProducts=async ()=>
    {
        try{
            let {data}=await axios.get(`http://localhost:3000/products/${pid}`)
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(()=>

    {
        getProducts()
    },[])
  return (
    <div>
        <ul>
            <li>Name:{product.name} </li>
            <li>Price:{product.price}</li>
            <li>Color:{product.color}</li>
            <li>Brand:{product.brand}</li>
        </ul>
    </div>
  )
}

export default ProductDetails