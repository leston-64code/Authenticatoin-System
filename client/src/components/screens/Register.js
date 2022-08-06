import React,{useState,useEffect} from 'react'
import "./register.css"
import axios from "axios"
import { Link } from 'react-router-dom'

const Register = ({history}) => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [error,setError]=useState("")

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            history.push("/")
        }
    },[history])


 async  function registerHandler(e){
    e.preventDefault()

    const config={
        header:{
            "Content-Type":"application/json"
        }
    }

    if (password!==confirmPassword){
        setPassword("")
        setConfirmPassword("")
        setTimeout(()=>{
            setError("")
        },5000)
        return setError("Passowrds do not match")
    }

    try {
        const {data}=await axios.post("/api/auth/register",{username,email,password},config)

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
            
             
             <p className="title-one"> Sign Up</p>
            </div>
            <div className="name">
                <div className="flexer">
                    <div className="flexer-one">
                        <p className="conner">Name :</p>
                    </div>
                    <div className="flexer-two newer">
                        <input type="text" className="name-input input-control" placeholder="Enter your name" 
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value)
                        }}/>
                    </div>
                </div>
               
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
                        }}/>
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
            <div className="password">
                <div className="flexer">
                    <div className="flexer-one">
                        <p className="conner">Confirm Password :</p>
                    </div>
                    <div className="flexer-two">
                        <input type="text" className="password-input input-control" placeholder="Enter your password "
                        value={confirmPassword}
                        onChange={(e)=>{
                            setConfirmPassword(e.target.value)
                        }}
                        />
                    </div>
                </div>
               
            </div>
            <div className="submit-section">
                <button type="submit" className="submit-button" onClick={registerHandler}>
                    Register
                </button>
            </div>
            <span style={{color:"white"}}>Already have an account ? <Link className='linkerman'  to="/login">Login</Link></span>
        </div>
    </div>
</div>

  )
}

export default Register
