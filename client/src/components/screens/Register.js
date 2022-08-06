import React,{useState} from 'react'
import "./register.css"
import axios from "axios"
import { Link } from 'react-router-dom'

const Register = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

  function registerHandler(){
    
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
            <span>Already have an account ? <Link to="/login">Login</Link></span>
        </div>
    </div>
</div>

  )
}

export default Register
