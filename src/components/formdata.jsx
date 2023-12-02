import React, { useState } from 'react'
import Anant from './css/formdata.module.css'

export default function Formdata() {
    let [Studentdata,setStudent] = useState({fn:"",email:"",phn:"",pass:"",conpass:""})

    let changeFormData=({target:{name,value}})=>
    {
        setStudent({...Studentdata,[name]:value})
    }

    let submitformdata=(e)=>
    {
        e.preventDefault();
        localStorage.setItem("details",Studentdata)

    }


    return (
        <>
            <form onSubmit={submitformdata} className={Anant.main} >
                <h3 id="heading1">user registration form </h3>
                <div className="main1">
                    
                    <input id="username" type="text" placeholder="Enter your Fullname" required name='fn' value={Formdata.fn}  onChange={changeFormData}/> <br />

                    <input id="email" type="email" placeholder="enter your email" required name='email' value={Formdata.email} onChange={changeFormData}/><br />

                    <input id="phnumber" type="number" placeholder="Enter your phone number " required name='phn' value={Formdata.phn} onChange={changeFormData}/><br />
                    
                    <input id="password" type="password" placeholder=" enter password" name='pass' value={Formdata.pass} onChange={changeFormData}/><br />

                    <input id="chpassword" type="text" placeholder="confirm password" name='conpass' value={Formdata.conpass} onChange={changeFormData} /><br />

                </div>

                    <button type="submit" id="btn1">submit</button>
                    <input type="text" placeholder='search here' />
                    <button onSubmit={submitformdata}>check me </button>
            </form>
            

        </>
        )
}
