import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
import { Navigate } from "react-router-dom"

export default function Logout(){
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handleClick = () => {
    logout()
  }

  if(!user){
    return <Navigate to="/" replace={true} />
  }

  return(
    <button onClick={handleClick}>Log out</button>
  )
  
}