import { useCounter } from "./useCounter";

function CounterOne(){
    let {count,increamentCounter,decreamentCounter,reset}=useCounter(2)

    return (
        <div>
            <h1>Custom Hook start:Counter</h1>
            <h1>Count : {count}</h1>
            <button onClick={increamentCounter}>+</button>
            <button onClick={decreamentCounter}>-</button>
            <button onClick={reset}>Reset</button>
            <hr />
        </div>
    )
}

export default CounterOne