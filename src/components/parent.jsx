import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function Parent() {
  return (
    <div>
      <h2>my model</h2>
      <Link to='nested'>nested</Link>
      <Outlet/>
    </div>
  )
}

export default Parent
