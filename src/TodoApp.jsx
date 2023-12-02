import React from 'react'
import { useState } from 'react'

export default function TodoApp() {
    let [task,setTask] = useState("");
    let [tasks,setTasks] = useState([]);

    let changeTask=({target:{value}})=>
    {
        setTask(value)
    }

    let addTAsk=()=>
    {
        setTasks([...tasks,task]);
        setTask("")
    }

    let deleteTAsk=(index=2)=>
    {
        let reamainingTasks = tasks.filter((t,i)=>
        {
            return index!==1;
        })
        setTasks(reamainingTasks)
    }
  return (
    <sectioon>
        <div>
            <input type="text" placeholder='task' onChange={changeTask} value={task} />
            <button onClick={addTAsk}>add</button>
        </div>
        <div >
            {task.map((t,i)=>
            {
                    return <div key={i}>
                        <span>{t}</span>
                        <button onClick={()=>
                        {
                            deleteTAsk(i)
                        }
                        }>delete</button>

                    </div>
                }
                )
            }

        </div>
      
    </sectioon>
  )
}
