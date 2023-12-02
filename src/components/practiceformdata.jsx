import React, { useState } from 'react'

function Practiceformdata() {
  let [fdata,setfdata] = useState({name:"",email:"",pass:""})
  let [showDetails,setShowDetails]=useState(false)

  let updatefdata=(e)=>
  {
    setfdata({...fdata,[e.target.name]:e.target.value})
  }
  
  let sentdata=(e)=>
  {
     e.preventDefault()
     console.log(fdata)
     
  }

  let handleShowDetails=()=>{
    setShowDetails(true)
  }

  return (
    <div>
      <h1>sign up</h1>
      <form onSubmit={sentdata}>
      <input type="text" placeholder='name' onChange={updatefdata} name='name' /> <br />
      <input type="email" placeholder='email id ' onChange={updatefdata} name='email' /> <br />
      <input type="password" placeholder='password' onChange={updatefdata} name='pass'/> <br />
      <button type='submit'>enter</button>
      </form>

      <div>
        <button onClick={handleShowDetails}>Show</button>
      {showDetails && (
        <div>
          <h2>User Details</h2>
          <h1>name :{fdata.name}</h1>
          <h3>Email : {fdata.email}</h3>
        </div>
      )}
      </div>
    </div>
  )
}

export default Practiceformdata

