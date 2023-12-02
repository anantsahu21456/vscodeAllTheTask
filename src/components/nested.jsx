import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Nested() {
  return (
    <div>
      <h3>ajay is my friend</h3>
      <Link to='nestedinsidenested' > nestedinsidenested </Link>
      <Outlet/>
    </div>
  )
}

export default Nested
