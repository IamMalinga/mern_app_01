import { useEffect }from 'react'
import { useEventsContext } from "../../hooks/useEventsContext"
import { useAuthContext } from '../../hooks/useAuthContext' 
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ClockLoader from "react-spinners/ClockLoader";
// components

const Events = () => {
  const { events , dispatchEvents} = useEventsContext();
  const { user } = useAuthContext()
  const [url, setUrl] = useState();
  const [auth, setAuth] = useState();
  const [btnName,setBtnName] = useState();
  const [isLoading,setIsLoading] = useState();

  useEffect(() => {
    if (!user) {
      setUrl('/api/events/not-auth');
      setBtnName('Read More')
      setAuth()
    } else {
      setUrl('/api/events/read');
      setBtnName('Register For Event')
      setAuth(`Bearer ${user.token}`)
    }
    
    const fetchWorkouts = async () => {
      setIsLoading(true)
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : auth
        }
      });
      
      const json = await response.json();
      
      if (response.ok) {
        setIsLoading(false)
        dispatchEvents({type: 'SET_EVENTS', payload: json});
      }
    }
    
    fetchWorkouts();
  }, [dispatchEvents, user, url,auth]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove('show')
        }
      })
    })
    const hiddenElement = document.querySelectorAll('.hidden');
    hiddenElement.forEach((el) => observer.observe(el))
  
    })

  return (
    <motion.div className="container_II" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth , transition:{duration: 5 }}}>
    {isLoading?<ClockLoader color="#ad36d6" size={100} />:events && events.map(event => (
        <div className="card hidden" key={event._id}>
                    <div className="title">{event.title}</div>
                    <div className="img"><img src={require(`../../assets/img/${event.image}`)} alt="" srcSet="" /></div>
                    <div className="buttons">
                        <Link to={event._id.toString()} >
                        <button className="btn1" type="submit" >{btnName}</button>
                        </Link>
                    </div>
                </div>  
    ))}
  </motion.div>
  )
}

export default Events;
