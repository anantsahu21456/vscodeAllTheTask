import React from 'react'
import Sahu from './css/nave.module.css'

export default function nave() {
  return (
    <>
        <nav className={Sahu.navebar}>
        <a id='a1' href="">Anant sahu</a>
        <ul>
        <li>home</li>
        <li>src</li>
        <li>gallery</li>
        <li>contact us</li>
        <li>about us</li>
      </ul>
        </nav>
      <div className={Sahu.inputwala}>
      <input type="text" placeholder='search me '  />
      <button>check me</button>
      </div>
      
    </>
  )
}