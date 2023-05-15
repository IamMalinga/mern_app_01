import { createContext, useReducer } from 'react'

export const SelectedEventsContext = createContext()

export const selectedEventsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED': 
      return {
        selected_events: action.payload
      }
    case 'DELETE_SELECTED':
      return {
        selected_events: action.payload
      }
    default:
      return state
  }
}

export const SelectedEventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(selectedEventsReducer, { selected_events: null })

  return (
    <SelectedEventsContext.Provider value={{...state, dispatch}}>
      { children }
    </SelectedEventsContext.Provider>
  )
}