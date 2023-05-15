import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"
import { Link,Navigate } from "react-router-dom"

const Signup = () => {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isFinalYear, setIsFinalYear] = useState(false)
   const {signup, error, isLoading} = useSignup()
   const [res,setRes] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(firstName,lastName,email, password,isFinalYear);
      setRes(true)
  }

  if(res === true){
    return <Navigate to="/login" replace={true} />
  }


  return (
    <form className="signup" onSubmit={handleSubmit}>
    <h3>Sign Up</h3>
    <div className="input-container">
      <label for="first-name">First Name:</label>
      <input id="first-name" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
    </div>
    <div className="input-container">
      <label for="last-name">Last Name:</label>
      <input id="last-name" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
    </div>
    <div className="input-container">
      <label for="email">Email address:</label>
      <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
    </div>
    <div className="input-container">
      <label for="password">Password:</label>
      <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
    </div>
    <div className="input-container">
      <label for="final-year">Are you a final year student ?</label>
      <br/>
      <input id="final-year" type="checkbox" onChange={(e) => setIsFinalYear(e.target.checked)} value={isFinalYear} />
    </div>
    <div className="link">
      If you are alredy registered <Link to="/login" >click here</Link>
      </div>
    <button disabled={isLoading}>Sign Up</button>
    {error && <div className="error">{error}</div>}
  </form>
  
  )
}

export default Signup