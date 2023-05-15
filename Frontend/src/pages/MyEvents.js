import SelectedEvents from "../components/SelectedEvents"
import { useSelectedEventsContext } from "../hooks/useSelectedEventsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect, useState } from "react"
import { motion } from "framer-motion";


export default function MyEvents() {
  
  const { selected_events , dispatch} = useSelectedEventsContext()
  const { user } = useAuthContext()
  const [email , setEmail]= useState()
  console.log(email)
  useEffect(() => {
    
    const fetchEvents = async () => {
      const response = await fetch(`/api/selectedevents/read`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
    }
      })
      const json = await response.json()
      if(user){
        setEmail(user.email)
      }

      if (response.ok) {
        console.log(email)
        dispatch({type: 'SET_SELECTED', payload: json})
      }
    }

    if (user) {
      fetchEvents()
    }
  }, [dispatch, user , email])

  return (
    <motion.div className="selectedevents-layout" initial={{width:0}} animate={{width:"100%"}} exit={{y:window.innerWidth , transition:{duration: 0.5 }}} >
      <h2> My Events</h2>
      <p>This is the events that you are already choosen</p>


      <div>
      <div className="home">
      <div className="events">
        { selected_events && selected_events.map((event) => (
          <SelectedEvents key={event._id} event={event} />
        ))}
      </div>
    </div>
      </div>
     
    </motion.div>
  )
}
