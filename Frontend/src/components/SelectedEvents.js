import { useSelectedEventsContext } from '../hooks/useSelectedEventsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import TimeAgo from 'react-timeago'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const SelectedEvents = ({ event }) => {
  const { dispatch } = useSelectedEventsContext()
  const { user } = useAuthContext()
  const event_title = event.title;
  const user_email = user.email;

  const handleClick = async (e) => {
    e.preventDefault();
    if (!user) {
      return
    }
    const response = await fetch('/api/selectedevents/delete', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
      body : JSON.stringify({user_email,event_title})
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_SELECTED', payload: json})
    }
  }

  

  return (
    <motion.div className="selectedevents" initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <h3 className='item-a'>Event Title : {event.event}</h3>
      <p className='item-b'><strong>User Email : </strong>{event.email}</p>
      <p className='item-c'><strong>Registered  At : </strong><TimeAgo date={event.createdAt}  /></p>
      <span className="unregister" onClick={handleClick}>Unregister</span>
    </motion.div>
  )
}

export default SelectedEvents