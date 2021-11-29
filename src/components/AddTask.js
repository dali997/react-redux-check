import React, { useState } from 'react'
import { Form , Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import addTask from '../redux/action/action';


export const AddTask = () => {
    const dispatch = useDispatch();
    const [text,setText]=useState("")
    const handleChange=(e)=>{
        e.preventDefault()
        if(text){
            dispatch(addTask({id:Math.random(),text:text,isDone:false}));
            setText('')
        }else{
            alert('no task added')
        }

    }
    return (
        <div style={{display:"flex",justifyContent:'center'}}>
                    
     <Form onSubmit={handleChange}>
    <Form.Control type="text"
    placeholder="add new task!!" 
    onChange={(e)=>setText(e.target.value)}
    value={text}
    style={{width:'350px'}}/>
    <Button variant="info" type="submit" style={{width:"350px"}}>
    Submit
    </Button>
    </Form>
    </div>
    )
}
