import { Outlet } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { useEffect } from "react";

export default function RegistrationLayout() {
  const { user } = useAuthContext()
  const [msg,setMsg] = useState();
  const [warning,setWarning] = useState();
  const [isVisible,setVisibility] = useState()
  useEffect(() => {
  
     
    
    if(!user){
      setMsg('Please log in to register for the events!...')
      setVisibility('hidden')
    }else{
      setVisibility('block')
      setMsg('Welcome to the events registration...')
      if(user.isFinalYear){
        setWarning('Since you are final year student you can only register for Aurudu Kumara Kumari event')
      }else{
        setWarning('You are not final year')
      }
    }
  },[msg,user,isVisible])
  
  return (
    <div className="careers-layout">
      <h2>Events</h2>
      <p>{msg}</p>
      <p className="isFinal" style={{visibility:isVisible}}>{warning}</p>
      <Outlet />
     
    </div>
  )
}
