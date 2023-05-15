import { useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useState } from 'react'

export default function RegBtn() {
  const { id } = useParams()
  const { user } = useAuthContext()
  const [msg,setMsg] = useState('')
  const [event,setEvent] = useState('')
  const [isVisible, setVisiblity] = useState("none")
  const [email , setEmail] = useState("");
  
useEffect(() => {
    const findEvent = async () => {
      try {
        const res = await fetch(`/api/events/${id}`, {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json' ,
          'Authorization': `Bearer ${user.token}`,
        },
        });
  
        const data = await res.json();
        setEvent(data.title);
      } catch (error) {
        console.error(error);
      }
    };

    if(user){
        setVisiblity("block")
        setEmail(user.email)
     }
    
   
    findEvent();
  }, [id,user]);

  const handleEvent = async () => {
      
    const res2 = await fetch('/api/selectedevents/add' ,{
      method:'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
    
    },
      body: JSON.stringify({email,event})
  })

  if(res2.ok){
    setMsg('You are registered for '+ event)
  }else if(res2.status === 400){
    setMsg('You are already registered for '+ event);
  }

  }
 


  return (
    <div className="career-details" >
      <div style={{ display : isVisible }} >
        <button onClick={handleEvent}>Register</button>
      </div>
      <p>{msg}</p>
    </div>
  )
}
