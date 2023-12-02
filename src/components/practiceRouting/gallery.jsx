import React from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
  return (
    <div>
      <h1>i'm gallery i having some image which is looking awsome</h1>
      <img height="300px" width="300px" border="2px solid red"  test-align="center" border-radius="10px" src="https://cdn.pixabay.com/photo/2023/10/23/17/03/audi-8336484_1280.jpg" alt="" /> 
      <img height="300px" width="300px" border="2px solid red"  border-radius="10px" src="https://cdn.pixabay.com/photo/2023/11/10/17/10/jack-russell-8379770_1280.jpg" alt="" /> <br />
      <button> <Link to='/about' >go about page</Link> </button>
        <button> <Link to='/contact' >go contact page</Link> </button>
        <button> <Link to='/' >go home page</Link> </button>
        <button> <Link to='/products' >go products page</Link> </button>
    </div>
  )
}

export default Gallery
