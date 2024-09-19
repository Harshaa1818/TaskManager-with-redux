import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { addtask, deletetask } from "../Redux/Todo.slice";

const EditTask = () =>{
    const {index} = useParams();
    const tasks = useSelector(state=>state.tasks)
    const dispatch = useDispatch()
    const task = tasks.filter((task,i)=> i== index )
    const navigate = useNavigate()
    
    //console.log(task)

   

    //console.log(title)
    const[title,setTitle]=useState(task[0].title)
    const[description,setDescription]=useState(task[0].description)
    const[priority,setpriority]=useState(task[0].priority)
    const[status,setStatus]=useState(task[0].status)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newTask={};
        newTask.title = title;
        newTask.description = description;
        newTask.status = status;
        newTask.priority = priority;
        dispatch(deletetask(index))
        dispatch(addtask(newTask))
        navigate('/userlandingpage')


    }
    
    return(
        <form onSubmit={handleSubmit}>
        <input placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input placeholder="description"  value={description} onChange={(e)=>setDescription(e.target.value)}/>

        <input placeholder="priority"onChange={(e)=>setpriority(e.target.value)}  value={priority}/>

        <input placeholder="status" onChange={(e)=>setStatus(e.target.value)} value={status}/>
        <button type="submit">Submit</button>

    </form>
    )
}

export default EditTask