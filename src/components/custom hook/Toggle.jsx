import React from 'react'
import useToggle from './useToggle'

export default function Toggle() {
    const [value, toggleValue] = useToggle(false)
  return (
    <div>
        <h1> next custome hook= Toggle</h1>
        <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>sahi karo</button>
      <button onClick={() => toggleValue(false)}>galat karo</button>
      <hr />
    </div>
  )
}
