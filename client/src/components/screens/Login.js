import React from 'react'
import "./login.css"

const Login = () => {
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
                        <input type="text" className="email-input input-control" placeholder="Enter your email"/>
                    </div>
                </div>
                
            </div>
            <div className="password">
                <div className="flexer">
                    <div className="flexer-one">
                        <p className="conner">Password :</p>
                    </div>
                    <div className="flexer-two">
                        <input type="text" className="password-input input-control" placeholder="Enter your password "/>
                    </div>
                </div>
               
            </div>
            
            <div className="submit-section">
                <button className="submit-button">
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Login