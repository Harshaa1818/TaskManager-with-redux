import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasks:[
        {
            title:"play cricket",
            description:"in the morning",
            priority:"high",
            status:"todo"
    
        },
        {
            title:"play cricket",
            description:"in the morning",
            priority:"high",
            status:"todo"
    
        },
        {
            title:"play football",
            description:"in the evening",
            priority:"medium",
            status:"done"
    
        },
        {
            title:"make tea",
            description:"in the morning",
            priority:"low",
            status:"inprogress"
    
        },


]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtask:(state,action)=>{
            state.tasks.push(action.payload)

        },
        updatetask:(state,action)=>{
             state.tasks = state.tasks.map((task,index)=> {
                
                if(index == action.payload){
                task.status="done"
        }
       return task
    })},

        deletetask:(state,action)=>{
           state.tasks = state.tasks.filter((task,index)=> index !== action.payload)

        }
    }

})

export default todoSlice.reducer;
export const {addtask,updatetask,deletetask,editTask} = todoSlice.actions
