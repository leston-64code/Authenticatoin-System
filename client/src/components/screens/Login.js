import React,{useState,useEffect} from 'react'
import "./login.css"
import axios from "axios"
import { Link } from 'react-router-dom'

const Login = (history) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            history.push("/")
        }
    },[history])

    
  async function loginHandler(e){
    e.preventDefault()

    const config={
        header:{
            "Content-Type":"application/json"
        }
    }

  
    try {
        const {data}=await axios.post("/api/auth/login",{email,password},config)

        localStorage.setItem("authToken",data.token)

        history.push("/")
    } catch (error) {
        setError(error.response.data.error)
        setTimeout(()=>{
        setError("")
        },5000)
    }

  }
  return (
    <div className="one-c">
    <div className="two-c">
        <div className="three-c">
            <div className="title">
            
             
             <p className="title-one"> Login</p>
            </div>
            <div className="email">
                <div className="flexer">
                    <div className="flexer-one">
                        <p className="conner">Email :</p>
                    </div>
                    <div className="flexer-two">
                        <input type="text" className="email-input input-control" placeholder="Enter your email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        />
                    </div>
                </div>
                
            </div>
            <div className="password">
                <div className="flexer">
                    <div className="flexer-one">
                        <p className="conner">Password :</p>
                    </div>
                    <div className="flexer-two">
                        <input type="text" className="password-input input-control" placeholder="Enter your password "
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        />
                    </div>
                </div>
               
            </div>
            
            <div className="submit-section">
                <button className="submit-button" onClick={loginHandler}>
                    Submit
                </button>
            </div>
            <span>Don't have an account <Link to="/register">Register</Link></span>
        </div>
    </div>
</div>

  )
}

export default Login
