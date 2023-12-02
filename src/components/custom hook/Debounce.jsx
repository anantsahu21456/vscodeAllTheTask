import React, { useState } from 'react'
import useDebounce from './useDebounce'

export default function Debounce() {
    const [count, setCount] = useState(0)
    useDebounce(() => alert(count), 1000, [count])
  return (
    <div>
        <h1>Custom Hook:second start</h1>
         <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <hr />
    </div>
  )
}
