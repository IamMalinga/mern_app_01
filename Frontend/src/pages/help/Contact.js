import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Contact() {
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const { user } = useAuthContext();
  const [ post , setPost ] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contacts/',{
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    body: JSON.stringify({ email, message })
  })

  if(res.ok){
    setPost('Your messege is sent successfully')
  }else{
    setPost('Your messege is not sent successfully')
  }
  }


  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form className="contact" onSubmit={handleSubmit}>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" onChange={e => setMessage(e.target.value)} value={message} required></textarea>
        </label>
        <button type="submit">Submit</button>

       <p>{post}</p>
      </form>
    </div>
  )
}