import React, {useEffect, useState} from 'react'

function Githubuser(){
    let [users,setUsers] = useState([]);

    useEffect(()=>
    {
        let gitusers = fetch("http://api.github.com/users");

        gitusers.then((res)=>
        {
            return res.json();
        })
        .then((apiData)=>
        {
            setUsers(apiData)
        })
    },[])

    return(
        <div>
            <ul>
                {
                    users.map(({id,avatar_url})=>
                    {
                        return <li key={id}>
                            <img height="200px" width="200px" src={avatar_url} alt="" />
                        </li>
                    })
                }
            </ul>
        </div>
    )

}
export default Githubuser
