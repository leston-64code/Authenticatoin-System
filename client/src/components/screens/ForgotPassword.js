import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
    const navigate = useNavigate();
    async function forgotHandler(){

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
                <input
                  type="text"
                  className="email-input input-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
         
          <div className="submit-section">
            <button className="submit-button" onClick={forgotHandler}>
              Submit
            </button>
          </div>
          <span style={{ color: "white" }}>
             Already have an account ?{" "}
            <Link className="linkerman" to="/login">
              {" "}
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
