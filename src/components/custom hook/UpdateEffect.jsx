import React, { useState } from 'react'
import useUpdateEffect from './useUpdateEffect'

export default function UpdateEffect() {
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])
  return (
    <div>
        <h1>this is customhooks use to updateeffect </h1>
        <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
