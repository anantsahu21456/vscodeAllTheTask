import React from 'react'
import Employeename from './employeename'
import Employeeage from './employeeage'

export default function employeedetails({name,age}) {
  return (
    <div>
      <Employeename name={name}/>
      <Employeeage age={age} />
    </div>
  )
}

