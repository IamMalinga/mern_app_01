import { SelectedEventsContext } from '../context/SelectedEventsContext'
import { useContext } from 'react'

export const useSelectedEventsContext = () => {
  const context = useContext(SelectedEventsContext)

  if (!context) {
    throw Error('useSelectedEventContext must be used inside an SelectedEventContextProvider')
  }

  return context
}