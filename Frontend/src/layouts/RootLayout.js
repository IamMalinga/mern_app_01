import { Outlet, NavLink } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"
import { useAuthContext  } from "../hooks/useAuthContext"
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function RootLayout() {
  const { user } = useAuthContext();
  const [log,setLog] = useState('')
  const [head,setHead] = useState('');
  const [displayType, setDisplayType] = useState();
  const [displaySignupButton, setDisplaySignupButton] = useState();
  useEffect(()=>{
    if(user){
      setLog('logout')
      setHead('Log out')
      setDisplayType('block')
      setDisplaySignupButton('none')
    }else{
      setLog('login')
      setHead('Log in')
      setDisplayType('none')
      setDisplaySignupButton('block')
    }
  },[user])
  


  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Pera Events</h1>
          <AnimatePresence>
          <NavLink to="/">Home</NavLink>
          <NavLink to="events">Events</NavLink>
          <NavLink style={{display : displayType}} to='select'>My Events</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink style={{display : displayType}} to="help">Help</NavLink>
          <NavLink to={log}>{head}</NavLink>
          </AnimatePresence>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
