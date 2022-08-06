import React,{useEffect, useState} from 'react'
import axios from "axios"
const Private = () => {

    const [error,setError]=useState("")
    const [privateData,setPrivateData]=useState("")

 useEffect(()=>{
    if(!localStorage.getItem("authToken")){
        history.push("/login")
    }

    const fetchPrivateData=async ()=>{
        const config={
            header:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem("authToken")}`
            }
        }

        try {
            const {data}=await axios.get("/api/private",config)
            setPrivateData(data.data)
        } catch (error) {
            localStorage.removeItem("authToken")
            setError("You are not authrized please login")
        }
    }
  fetchPrivateData()
 },[history])

 function logoutHandler(){
    localStorage.removeItem("authToken")
    history.push("/login")
 }

  return (
    
      error ?<span>{error}</span>:<>
      <div style={{background:"green",color:"white"}}>{privateData}</div>
      <br /><br />
      <button onClick={()=>{
        logoutHandler
      }}>Logout</button>
      </>
    
  )
}

export default Private
