import React from 'react'
import Employeeimg from './employeeimg'
import Employeedetails from './employeedetails'
import employee from './employeedata'
import  mone from "./css/employeelist.module.css"

export default function employeelist() {
  return (<>
    {
      employee.map(({ img, name, age }) => {
        return (
          <div className={mone.anant}>
            <Employeeimg img={img} />
            <Employeedetails name={name} age={age} />
          </div>
        )
      })}</>
  )
}
