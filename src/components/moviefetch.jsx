import React, { useEffect, useState } from 'react'
import Menika from './css/moviefetch.module.css'

export default function Moviefetch() {
    let [Data,setData ] = useState([]);
    let [ text,setText] = useState("")

    function addinput(e)
    {
       setText(e.target.value)
    }

    async function getmovie()
    {
        let anant = await fetch(`http://www.omdbapi.com/?s=${text}&apikey=28e6c3ad`)
        anant = await anant.json()
        setData(anant.Search)
        console.log(anant)
    }

    useEffect(()=>
    {
      // console.log("use")
    },[text])

    return(
      <>
      <div className={Menika.inputwala}>
      <input type="text" onChange={addinput} placeholder='movie search here' />
      <button onClick={getmovie}> click me </button>
      </div>
      <div className={Menika.picture}>

          {
            Data.map(({Title,Year,imdbID,Type,Poster})=>
            {
              return <div className={Menika.picture}>
              <li key={imdbID}>
              <h3>{Title}</h3>;
              <img width="200px" height="200px" src={Poster} alt="" />
              <h3>{Year}</h3>;
              <h3>{Type}</h3>;
              </li>
              </div>

            })
          }
       
      </div>
      </>

    )

//   return (
//     <div className={Menika.inputwala}>
//       <input type="text" placeholder='movie search here' />
//       <button onClick={movie}> click me </button>
//     </div>
//   )
}
