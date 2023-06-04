import { createContext, useReducer } from 'react'

export const EventsContext = createContext()

export const eventsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENTS': 
      return {
        events: action.payload
      }
    default:
      return state
  }
}

export const EventsContextProvider = ({ children }) => {
  const [state, dispatchEvents] = useReducer(eventsReducer, {
    events: null
  })

  return (
    <EventsContext.Provider value={{...state, dispatchEvents}}>
      { children }
    </EventsContext.Provider>
  )
}