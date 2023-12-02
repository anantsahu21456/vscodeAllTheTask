import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>hy i'm about page </h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3oYVi-WNgUblreFo4k0SUCvwXHGbzXb4kw&usqp=CAU" alt="" />
      <p>Rohit Gurunath Sharma is an Indian international cricketer and the current captain of India national cricket team in all formats. Widely regarded as one of the greatest batsmen of this era, Sharma is known for his timing, elegance, six-hitting abilities and leadership skills. Wikipedia
Born: 30 April 1987 (age 36 years), Nagpur
Spouse: Ritika Sajdeh (m. 2015)
Dates joined: 2011 (Mumbai Indians), MORE
Parents: Gurunath Sharma, Purnima Sharma
Height: 1.7 m
Siblings: Vishal Sharma
2006/07–present: Mumbai</p>
      <button> <Link to='/' >go home page</Link> </button> 
        <button> <Link to='/contact' >go contact page</Link> </button> 
        <button> <Link to='/gallery' >go gallery page</Link> </button>
        <button> <Link to='/products' >go products page</Link> </button>
    </div>
  )
}

export default About
