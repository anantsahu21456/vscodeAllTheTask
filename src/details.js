import React from 'react'

export default function details(props) {
    console.log(props)
  return (
    <div>
      <p>Lorem ipsum dolor sit amet hello {props.name}</p>
      <p>es page ka title hai ki = {props.title}</p>
      <p>this para is shoing to = {props.age} </p>

      <img src="https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_1280.png" width="300px" height="300px "  alt=""    />
    </div>
  )
}

details.propTypes = {
    name: React.string,
    title: React.string,
    age: React.number 
  };

  details.defaultProps ={
    name:"tomy",
    title:"kutta",
    age:'1'
  }
