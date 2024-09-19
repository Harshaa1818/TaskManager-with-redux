import { useNavigate } from "react-router-dom"

const Homepage = () =>{
    const navigate = useNavigate();


    const handleclick = () =>{
        navigate('/userlandingpage')

    }
    return (
        <div>
            

           <h1>
             Welcome to task Management system 
            </h1>
          <div style={{justifyContent:"center", display:"flex"}}>
              <button onClick={handleclick}>Click here to proceed</button>
            </div>
        </div>
    )
}

export default Homepage