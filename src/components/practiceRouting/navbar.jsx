import React from 'react'
import { Link } from 'react-router-dom'
// import Anant from './practicsRouting/navemodule.css'

function Navbar() {
  return (
    <div>
       <div className="reactnave">
       <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/gallery'>gallery</Link>
        <Link to='/products'>products</Link>
       </div>
      
    </div>
  )
}

export default Navbar
