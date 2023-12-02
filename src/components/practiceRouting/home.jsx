import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>hy i'm home page </h1>
        <h3>my name anant sahu</h3>
        <h4>i'm from madhya pradesh</h4>
        <h6>but now i'm in bangalore </h6>
        <p>and i have successfully complected my webdevelop traniee</p>
        <p>i have learned some skills which is = HTML5,CSS3,JAVASCRIPT,and,REACTJS,NODEJS,MONGODB,</p>

        <button> <Link to='/about' >go about page</Link> </button> 
        <button> <Link to='/contact' >go contact page</Link> </button> 
        <button> <Link to='/gallery' >go gallery page</Link> </button>
        <button> <Link to='/products' >go products page</Link> </button>
      
    </div>
  )
}

export default Home
