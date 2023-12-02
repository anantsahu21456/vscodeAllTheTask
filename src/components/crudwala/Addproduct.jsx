import React, { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'

function Addproduct() {


    let [formdata, setFormdata] = useState({ name: "", price: '', color: '', brand: '' })
    let [showmodal, setshowmodal] = useState(false)

    // ! updating state with entered data fromt the ui


    let changeFormDAta = ({ target: { name, value } }) => {
        setFormdata({ ...formdata, [name]: value })
    }


    // ! Submiting the form data

    let submitFormDAta = async (e) => {
        e.preventDefault();

        let addproduct = await axios.post('http://localhost:3000/product', formdata)
        setshowmodal(true)

        setTimeout(() => {
            setshowmodal(false)
        }, 3000)
    }
    return (
        <div>
            {showmodal && <Modal data='product Added Succesfully' bgcolor='green' textcolor='lightgreen' />}
            <form onSubmit={submitFormDAta} className='form'>
                <div className='input-div'>
                    <input type="text"  placeholder='product name' name='name' value={formdata.name} onChange={changeFormDAta}/>
                </div>
                <div className='input-div'>
                    <input type="tel" placeholder='product price' name='price' value={formdata.price} onChange={changeFormDAta}/>
                </div>
                <div className='input-div'>
                    <input type="text"  placeholder='product color' name='color' value={formdata.color} onChange={changeFormDAta}/>
                </div>
                <div className='input-div'>
                    <input type="text"  placeholder='product brand' name='brand' value={formdata.brand} onChange={changeFormDAta}/>
                </div>
                <div className='input-div'>
                    <button type="submit">Add product</button>
                </div>
            </form>
        </div>
    )
}

export default Addproduct