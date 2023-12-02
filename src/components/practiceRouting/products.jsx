import React from 'react'
import { Link , Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
      <h1>here u will get some products</h1>
      <p>if u want to purches any product then click on the products name then u can able to purcheswhat ever u want </p>
        <button> <Link to='/' >go home page</Link> </button> 
        <button> <Link to='/contact' >go contact page</Link> </button> 
        <button> <Link to='/gallery' >go gallery page</Link> </button>
        <button> <Link to='/about' >go about page</Link> </button><br />
        <Link to='mobile' >mobile</Link> <br />
        <Link to='laptop' >laptop</Link> <br />
        <Link to='buds' >buds</Link>
        <Outlet/>
    </div>
  )
}

export default Products
