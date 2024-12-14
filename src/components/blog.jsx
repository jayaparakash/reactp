import { Header } from "./header"

export const Blog = () =>{

    // let [age , setAge]

    let age = 19

    return(
    <div>
        <Header />
       

       <h1 className={age<=18 ? 'bg-success text-center text-light':'bg-danger  text-center text-light' }>{age<=18 ? "sucess":"Failure"}</h1>
        
    </div>
    )
}