import react from 'react'

function conditionalrendering()
{
    let day = 'sunday'
    // if(day==='sunday')
    // {
    //     return <h1>holiday hai </h1>
    // }
    // else if (day ==='monday')
    // {
    //     return <h2>working day </h2>
    // }
 
    return(
        <>
        {day==='monday'? <h2>holiday</h2>: <h4>working day</h4> }
        <h3>  =>> i'm conditional rendering component </h3>
        </>
    )
}
export default conditionalrendering