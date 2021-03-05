import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

const initalState = { counter: 0, increment: 0 }

export const AppContex = createContext()
export const UseAppContex = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <AppContex.Provider value={{state, dispatch}}>
      {children}
    </AppContex.Provider>
  )
}