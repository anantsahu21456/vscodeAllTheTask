import react from 'react'
import mone from './eventhandiling.module.css'

function eventhandiling()
{
    function bulb()
    {
        let bgc='pink'
        if(bgc==='yellow')
        {
            return 
        }

    }
    return(
        <>

        <div className={mone.on}>
            <h2> now i'm change </h2>
            <button className={mone.btn} onClick={bulb}>click me</button>
        </div>
        </>
    )
}
export default eventhandiling