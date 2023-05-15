import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { EventsContextProvider } from './context/EventContext'
import { SelectedEventsContextProvider } from './context/SelectedEventsContext'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    
      <EventsContextProvider>
      <SelectedEventsContextProvider>
        <App />
        </SelectedEventsContextProvider>
        </EventsContextProvider> 
    
    </AuthContextProvider>
  </React.StrictMode>
)