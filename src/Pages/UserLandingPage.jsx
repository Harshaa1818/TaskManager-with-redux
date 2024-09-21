import { useEffect, useState } from "react"
import '../App.css'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updatetask, deletetask } from "../Redux/Todo.slice"

const UserLandingPage = () =>{

    const navigate= useNavigate()
  
  
    const dispatch = useDispatch();
    const[newTask,setNewTask]=useState([]);
    //const[markascompleted,setmarkascompleted] = useState(true)
    let tasks = useSelector((state) => state.tasks);


    useEffect(()=>{
        
        setTimeout(()=>{
        console.log(tasks)
        setNewTask(tasks)

        
   
        },1000)

    },[tasks,dispatch])




    const handleMarkComplete = (index) =>{
        
    dispatch(updatetask(index))
    }

    const handledeletetask = (index) =>{
        dispatch(deletetask(index))

    }
    const handleEditTask = (index)=>{
        navigate(`/edittask/${index}`)

    }

    return(
        <div>
            <div style={{display:"flex", justifyContent:"center"}}><button style={{ backgroundColor:"lawngreen"}} onClick={()=>navigate('/newtask')}>Add New task</button></div>
            <div className="card-container">
                {newTask && newTask.map((task,index)=>(
                    <card  className="card" key={index}>
                        <div><h4>Title: {task.title}</h4></div>
                        <div>description: {task.description}</div>
                        <div>priority: {task.priority}</div>
                        <div>status: {task.status}</div>
                        <button style={{marginTop:"5px", backgroundColor:"lightcoral"}} onClick={()=>handleEditTask(index)} >Edit task</button>
                        <button style={{marginTop:"5px", backgroundColor:"red"}} onClick={()=>handledeletetask(index)}>DeleteTask</button>
                    {task.status !=='done' &&  <button style={{marginTop:"5px", backgroundColor:"lightblue"}} onClick={()=>handleMarkComplete(index)} >Mark as completed</button>}


                    </card> 
                ))}

            </div>
        </div>
    )

}

export default UserLandingPage