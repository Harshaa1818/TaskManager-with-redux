import { useState } from 'react'
import {Route, Routes} from'react-router-dom'

import './App.css'
import UserLandingPage from './Pages/UserLandingPage'
import Homepage from './Pages/HomePage'
import Addtask from './Pages/Addtask'
import EditTask from './Pages/EditTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/newtask' element={<Addtask/>}/>
      <Route path='/edittask/:index' element={<EditTask/>}/>
      <Route path='/userlandingpage' element={<UserLandingPage/>}/>
    </Routes>
     
    </>
  )
}

export default App
