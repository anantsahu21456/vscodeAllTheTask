import React, { useState } from 'react'

function CustomeFormVlidation() {
    let [formData,setformData] = useState({fn:"",mob:"",email:"",pwd:""})
    let [error,setError] = useState({})


    //^ updating state with entered data from the ui
    let changeFormData=({target:{name,value}})=>
    {
        setformData({...formData,[name]:value})
    }

    //^ submitting the form data 
    let submitFormData=(e)=>
    {
        e.preventDefault();
        setError(validate(formData))
    }

    //^ validating the for form data 
    let validate=(fdata)=>
    {
      let errormessage = {};

      //& fn validation code
      if(!fdata.fn)
      {
        errormessage.fnmessage = "full name dal bsdk"
      }
      else if(fdata.fn.length<6)
      {

        errormessage.fnmessage = "full name 6 number ka dalo bsdk"
      }

      //& mob validation code
      if(!fdata.mob)
      {
        errormessage.mobmessage ="mobile num. dal bsdk"
      }
      return errormessage

    }
    console.log(error)


  return (
    <div>
      <form onSubmit={submitFormData} >
        <div>
            <input type="text" placeholder='fullname' name='fn'value={formData.fn}
             onChange={changeFormData} />
             <small>{error.fnmessage && error.fnmessage}</small>
        </div>
        <div>
            <input type="tel" placeholder='mobile' name='mob' value={formData.mob} onChange={changeFormData} />
            <small>{error.mobmessage && error.mobmessage}</small>
        </div>
        <div>
            <input type="email" placeholder='email' name='email' />
        </div>
        <div>
            <input type="text" placeholder='password' name='pwd' />
        </div>
        <div>
            <button type='submit'>register</button>
        </div>
      </form>
    </div>
  )
}

export default CustomeFormVlidation
