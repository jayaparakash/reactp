import { useState } from "react"
import { Header } from "./header"

export const Home =()=>{


    let [count, setCount] = useState(0)



    return(
        <div className="container">
            <Header/>
     <h1>   Welcome to Home</h1>

     <button className="btn btn-primary" onClick={()=>setCount(count+1)}>INC</button>
   <h2>  {count}</h2>
     <button className="btn btn-danger" onClick={()=>setCount(count-1)}>DEC</button>
        </div>
    )
}