import {Button} from 'react-bootstrap'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Task} from './Task'



export const TaskList = () => {
    const [status,setStatus]=useState("All")
    

    const listtask= useSelector(state=>state.task.ListTask)
    return (
        <div>
            <div style={{display:"flex",width:"300px",padding:"20px",alignItems:"center",marginLeft:"40%",justifyContent:"space-between"}}>
        <Button variant='danger' onClick={()=>setStatus("All")}>All</Button>
        
        <Button variant='danger' onClick={()=>setStatus("Done")}>DONE</Button>
        
        <Button variant='danger' onClick={()=>setStatus("NotDone")}>NOT DOEN YET</Button>
        </div>
           {
           status === "Done" ? listtask
           .filter((el)=>el.isDone === true)
           .map((el)=> <Task task={el} key={el.id}/>):status === "NotDone" ? listtask.filter((el)=>el.isDone ===false)
           .map((el)=> <Task task={el} key={el.id}/>):listtask.map((el)=> <Task task={el} key={el.id}/>)
           } 
       

        </div>
    )
}
