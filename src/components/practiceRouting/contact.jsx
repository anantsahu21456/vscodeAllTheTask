import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <h1>i'm contact page</h1>
      <h3> i have drop hare my contact info. if you want to contact with me then you call this num. or you can mail also </h3>
      <p>7225084092</p>
      <p>anantsahu21456@gmail.com</p>
      <button> <Link to='/about' >go about page</Link> </button> 
        <button> <Link to='/' >go home page</Link> </button> 
        <button> <Link to='/gallery' >go gallery page</Link> </button>
        <button> <Link to='/products' >go products page</Link> </button>
    </div>
  )
}

export default Contact
