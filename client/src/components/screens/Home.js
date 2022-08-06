import React from 'react'
import {Link } from "react-router-dom"

const Home = () => {
  return (
    <div >
      <h1 style={{color:"white"}}>Choose your choice</h1>
      <Link style={{"font-size":"50px","textDecoration":"none",color:"red"}} to="/register">Register</Link>
      <br />
      <br />
      <Link style={{"font-size":"50px","textDecoration":"none",color:"red"}}  to="/login">Login</Link>
    </div>
  )
}

export default Home
