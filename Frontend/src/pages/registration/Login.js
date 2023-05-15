import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import { Navigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading , status } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password);
  }

  if(status){
     return <Navigate to="/events" replace={true} />
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <div className="input-container">
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      </div>
      <div className="input-container">
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      </div>
      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login