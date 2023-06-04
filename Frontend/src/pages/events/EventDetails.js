import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useEffect } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function EventDetails() {
  const eventData  = useLoaderData()

  const { id } = useParams()
  const { user } = useAuthContext()
  const [msg,setMsg] = useState('')
  const [status,setStatus] = useState('')
  const [event,setEvent] = useState('')
  const [isVisible, setVisiblity] = useState("none")
  const [email , setEmail] = useState();
  
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
  }, [id,user,msg,status]);

  const handleClick = async ()=>{

    const res2 = await fetch('/api/selectedevents/add' ,{
      method:'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
    
    },
      body: JSON.stringify({email,event})
      
  }
  ).then((res2)=>{
    if(res2.ok){
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: 'Do you want to register for ' + event + ' event ?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, register for it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Added!',
            'You are register for ' + event,
            'success'
          )
         } else if (result.dismiss === Swal.DismissReason.cancel) 
        {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Registration is cancelled!...',
            'error'
          )
    }
      })


    }else if(res2.status === 400){
      setMsg(`You are already registered for ${eventData.title}`)
      Swal.fire(
        'Sorry',
        msg,
        'question'
      )
    }
  })


  

  
    
  }

  return (
    <div>
      <div className="main">
      <div className ="article">
        <div className="header">
          <h2>{eventData.title}</h2>
          <p className="post-meta">Posted At : {eventData.createdAt}</p>
        </div>
        <div class="image-wrapper">
        <img className='image' src={require(`../../assets/img/${eventData.image}`)} alt="" srcSet=""/>
        </div>
        
        <p>
          {eventData.details}
        </p>

        <p>
          <i>Price list</i>
          <ul>
            <li>1st place : {eventData.price_1}</li>
            <li>2nd place : {eventData.price_2}</li>
            <li>3rd place : {eventData.price_3}</li>
          </ul>
        </p>

        <p>{eventData.dec}</p>

        <button className='regBtn' style={{ display : isVisible }} onClick={handleClick}>Register</button>
        <p>{msg}</p>
      </div>
    </div>
    <div className="footer">
      <p>&copy; 2023 Pera Events</p>
    </div>
    </div> 
)
}

// data loader
export const EventDetailsLoader = async ({ params }) => {
  const { id } = params;
  

  const res = await fetch('/api/events/' + id)

  if (!res.ok) {
    throw Error('Could not find that career.')
  }

  return res.json()
}