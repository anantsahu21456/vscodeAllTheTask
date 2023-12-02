import React from 'react'
// import  './Modal.css'

function Modal({data,bgcolor,textcolor}) {
  return (
    <div className='modal' style={{color:textcolor,backgroundColor:bgcolor}}>
        {data}
        </div>
  )
}

export default Modal