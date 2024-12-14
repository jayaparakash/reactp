import { useState } from "react"
import { Header } from "./header"
import axios from "axios"

export const RegisterFrom = () => {


    // onChange
    let [name, setName] = useState('')
    let [email, setemail] = useState('')
    let [mobileNum, setMobileNum] = useState('')
    let [password, setPassword] = useState('')

    // errMessage

    let [errName,setErrName]=useState('')
    let [erremail,setErremail]=useState('')
    let [errpass,setErrpass]=useState('')
    let [errMob,setErrMob] = useState('')

function handleErr() {
    let errApi = 0;
    if (name.length<0 || name.trim()=="") {
        setErrName('Enter valid details')
        errApi++
    } else {
        setErrName('')
    }

    if (email.length<0 || email.trim()=="") {
        setErremail('Enter valid details')
        errApi++
    } else {
        setErremail('')
    }


    if (mobileNum.length<0 || mobileNum.trim()=="") {
        setErrMob('Enter valid details')
        errApi++
    } else {
        setErrMob('')
    }

    
    if (password.length<0 || password.trim()=="") {
        setErrpass('Enter valid details')
        errApi++
    } else {
        setErrpass('')
    }

    // console.log(errApi);

    if (errApi ===0) {
        
        let userDetails = {
            name:name,
            email:email,
            mobile:mobileNum,
            password:password
        }

        let apiData = axios.post("http://localhost:8080/",userDetails)
        console.log(apiData);
        
    }
    
    
}


    return (

        <div className="container ">
            <Header />

            <div className="col-6 mt-4">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="EnterName" onChange={(e)=> setName(e.target.value)} />
                <p className="text-danger">{errName}</p>
            </div>
            <div className="col-6 mt-4">
                <label htmlFor="" className="form-label">email</label>
                <input type="email" className="form-control" placeholder="Enteremail" onChange={(e)=> setemail(e.target.value)}/>
                <p className="text-danger">{erremail}</p>
            </div>
            <div className="col-6 mt-4">
                <label htmlFor="" className="form-label">MobileNumber</label>
                <input type="text" className="form-control" placeholder="EnterNumber" onChange={(e)=> setMobileNum(e.target.value)} />
                <p className="text-danger">{errMob}</p>
            </div>
            <div className="col-6 mt-4">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                <p className="text-danger">{errpass}</p>
            </div>

            <div className="div mt-4">
                <button className="btn btn-warning" onClick={()=>handleErr()}>Submit</button>
            </div>




            <div>
                name:   {
                    name
                }
                <br />
                email:{
                    email
                }
                <br />
                mobileNum:{
                    mobileNum
                }
                <br />
                password:{
                    password
                }
            </div>
        </div>
    )
}