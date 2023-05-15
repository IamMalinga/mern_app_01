import { useEffect }from 'react'
import { useEventsContext } from "../../hooks/useEventsContext"
import { useAuthContext } from '../../hooks/useAuthContext' 
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
// components

const Events = () => {
  const { events , dispatch} = useEventsContext();
  const { user } = useAuthContext()
  const [url, setUrl] = useState();
  const [auth, setAuth] = useState();

  useEffect(() => {
    if (!user) {
      setUrl('/api/events/not-auth');
      setAuth()
    } else {
      setUrl('/api/events/read');
      setAuth(`Bearer ${user.token}`)
    }
    
    const fetchWorkouts = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : auth
        }
      });
      
      const json = await response.json();
      
      if (response.ok) {
        dispatch({type: 'SET_EVENTS', payload: json});
      }
    }
    
    fetchWorkouts();
  }, [dispatch, user, url,auth]);

  return (
    <motion.div className="container" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth , transition:{duration: 5 }}}>
    {events && events.map(event => (
        <div className="card" key={event._id}>
                    <div className="title">{event.title}</div>
                    <div className="img"><img src={require(`../../assets/img/${event.image}`)} alt="" srcSet="" /></div>
                    <div className="buttons">
                        <Link to={event._id.toString()} >
                        <button className="btn1" type="submit" >Read More</button>
                        </Link>
                    </div>
                </div>  
    ))}
  </motion.div>
  )
}

export default Events;
