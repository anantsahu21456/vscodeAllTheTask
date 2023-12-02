import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Updateproduct() {
    let [formdata,setFormdata]=useState({name:"",price:'',color:'',brand:''})
    let [showmodal,setshowmodal]=useState(false)

    let {pid}=useParams()

    let getProducts=async()=>
    {
        try{
            let {data}=await axios.get(`http://localhost:3000/products/${pid}`);
            console.log(data);
            setFormdata(data)
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

    // ! updating state with entered data from the ui

    let changeFormDAta=({target:{name,value}})=>
    {
        setFormdata({...formdata,[name]:value})
    }

    // ! submiting the  form data

    let updateproduct=async(e)=>
    {
        e.preventDefault();

        let addproduct=await axios.put(`http://localhost:3000/products/${pid}`,formdata)
        setshowmodal(true)
    }
    setTimeout(() => {

        setshowmodal(false)
    }, 3000);

  return (
    <div>
        {showmodal && <Modal data='product updated successfully' bgcolor='green' textcolor='lightgreen'/>}
        <h1>Update  Product</h1>
        <form onSubmit={updateproduct} className='form'>
            <div className='input-div'> 
            <input type="text" placeholder='Product Name'  name='name' value={formdata.name} onChange={changeFormDAta}/>
            </div>
            <div className='input-div'> 
            <input type="tel" placeholder='Product price'  name='price' value={formdata.price} onChange={changeFormDAta}/>
            </div>
            <div className='input-div'> 
            <input type="text" placeholder='Product color'  name='color' value={formdata.color} onChange={changeFormDAta}/>
            </div>
            <div className='input-div'> 
            <input type="text" placeholder='Product Brand'  name='brand' value={formdata.brand} onChange={changeFormDAta}/>
            </div>
            <div className='input-div'> 
             <button type='submit'>Update Product</button>
              </div>
        </form>
    </div>
  )
}

export default Updateproduct