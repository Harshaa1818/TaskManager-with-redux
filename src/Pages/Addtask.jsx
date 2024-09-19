import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../Redux/Todo.slice";
import { Navigate, useNavigate } from "react-router-dom";
import '../App.css'


const Addtask = () =>{
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[priority,setpriority] = useState("")
    const[status,setstatus] = useState("")

    const dispatch= useDispatch();
    const navigate =  useNavigate()



    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTask={}
        newTask.title = title;
        newTask.description = description;
        newTask.status = status;
        newTask.priority = priority;

        dispatch(addtask(newTask))
        navigate('/userlandingpage')

    }
    return(
        <div style={{height:"300px", width:'100vw', display:"flex", justifyContent:"center"}}>
            <form  className='form' onSubmit={handleSubmit}>
                <h1>Add new Task Details!!</h1>
                <input placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
                <input placeholder="description"  onChange={(e)=>setDescription(e.target.value)}/>

                <input placeholder="priority"  onChange={(e)=>setpriority(e.target.value)}/>

                <input placeholder="status"  onChange={(e)=>setstatus(e.target.value)}/>
                <button style={{backgroundColor:"lightgreen"}}type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Addtask