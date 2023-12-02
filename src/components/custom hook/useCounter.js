import { useState } from "react";




function useCounter(c)
{
    let[count, setCount]=useState(0);

    let increamentCounter=()=>
    {
        setCount(count+c)
    }

    let decreamentCounter=()=>
    {
        setCount(count-c)
    }
    let reset=()=>
    {
        setCount(0)
    }

    return {count,increamentCounter,decreamentCounter,reset}
}

export {useCounter}