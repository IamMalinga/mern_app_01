import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import { useSignup } from "../../hooks/useSignup"
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"

const Login = () => {
  const { user } = useAuthContext()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login ,error_l} = useLogin()
  const {signup,error, isLoading} = useSignup()
  const [isFinalYear, setIsFinalYear] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    const result = await login(email, password);
    if(result.ok){
      error(JSON.parse(result))
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    const result = await signup(firstName,lastName,email, password,isFinalYear);
  }

  if(user){
     return <Navigate to="/events" replace={true} />
  }

  try{
      const sign_in_btn = document.querySelector("#sign-in-btn");
      const sign_up_btn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container_IV");

            sign_up_btn.addEventListener("click", () => {
                container.classList.add("sign-up-mode");
              });

            sign_in_btn.addEventListener("click", () => {
                container.classList.remove("sign-up-mode");
              });
            }catch(error){}

  return (
    <div class="container_IV">
    <div class="forms-container">
      <div class="signin-signup">
        <form class="sign-in-form" onSubmit={handleLogin}>
          <h2 class="title_IV">Log in</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <input type="submit" value="Login" class="btn solid" disabled={isLoading} />
          <p class="social-text">Or Sign in with social platforms</p>
          {error_l && <div className="error">{error_l}</div>}
          <br/>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
        <form class="sign-up-form" onSubmit={handleSignup}>
          <h2 class="title_IV">Sign up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
          </div>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <div class="input">
            <i class="fas fa-check"></i>
            <label for="final-year">Are you a final year student ?</label>
            <input id="final-year" type="checkbox" onChange={(e) => setIsFinalYear(e.target.checked)} value={isFinalYear} />
          </div>
          <input type="submit" class="btn" value="Sign up" />
          {error && <div className="error">{error}</div>}
          <p class="social-text">Or Sign up with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            if you are new user then please signup first within clicking below button
          </p>
          <button class="btn transparent" id="sign-up-btn">
            Sign up
          </button>
        </div>
        <img src="img/log.svg" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>Already user ?</h3>
          <p>
            If you are a already user then use login form. you can go to the login form clicking below button.
          </p>
          <button class="btn transparent" id="sign-in-btn">
            Log in
          </button>
        </div>
        <img src="img/register.svg" class="image" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Login