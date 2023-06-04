import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error_l, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const [status , setStatus] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true)

    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      setStatus(true);
      localStorage.setItem('user', JSON.stringify(json))

      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
    }

  }

  return { login, isLoading, error_l , status }
}