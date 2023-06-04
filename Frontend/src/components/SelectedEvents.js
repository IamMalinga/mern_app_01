import { useSelectedEventsContext } from '../hooks/useSelectedEventsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import TimeAgo from 'react-timeago';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useState } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';

const SelectedEvents = ({ event }) => {
  const { dispatch } = useSelectedEventsContext();
  const { user } = useAuthContext();
  const user_email = user.email;
  const [isLoading, setIsLoading] = useState();

  const del = async (event_title) => {
    if (!user) {
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch('/api/selectedevents/delete', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_email, event_title }),
      });

      if (response.ok) {
        const json = await response.json();
        dispatch({ type: 'DELETE_SELECTED', payload: json });
      } else {
        throw new Error('Failed to delete event');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async (event_title) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to unregister from ${event_title}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, unregister from it!',
    }).then((result) => {
      if (result.isConfirmed) {
        del(event_title);
        Swal.fire('Unregistered!', `You are unregistered from ${event_title}`, 'success');
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <ClockLoader color="#ad36d6" size={100} />
        </div>
      ) : (
        <motion.div
          className="selectedevents"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
        >
          <motion.h3 className="item-a">{event.event}</motion.h3>
          <motion.p className="item-b" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <strong>User Email: </strong>
            {event.email}
          </motion.p>
          <motion.p className="item-c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <strong>Registered At: </strong>
            <TimeAgo date={event.createdAt} />
          </motion.p>
<motion.button
className="unregister"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.3 }}
onClick={() => handleClick(event.event)}
>
Unregister
</motion.button>
</motion.div>
)}
</>
);
};

export default SelectedEvents;
