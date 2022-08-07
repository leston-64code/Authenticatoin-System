import React, { useState } from 'react'

const ResetPassword = () => {
    const [password,setPassword]=useState("")
    const [confirmpassword,setConfirmPassword]=useState("")

    function resetpassHandler(){

    }
  return (
    <div className="one-c">
    <div className="two-c">
        <div className="three-c">
            <div className="title">
            
             
             <p className="title-one"> Reset Password</p>
            </div>
            
            <div className="password">
                <div className="flexer">
                    <div className="flexer-one">
                        <p className="conner">New Password:</p>
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
                        <p className="conner">Confirm password</p>
                    </div>
                    <div className="flexer-two">
                        <input type="text" className="password-input input-control" placeholder="Enter your password "
                        value={confirmpassword}
                        onChange={(e)=>{
                            setConfirmPassword(e.target.value)
                        }}
                        />
                    </div>
                </div>
               
            </div>
            
            <div className="submit-section">
                <button className="submit-button" onClick={resetpassHandler}>
                    Submit
                </button>
            </div>
            {/* <span style={{color:"white"}}>Don't have an account ?  <Link className='linkerman' to="/register"> Register</Link></span> */}
        </div>
    </div>
</div>

  )
}

export default ResetPassword
