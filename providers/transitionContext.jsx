// context/TransitionContext.js
'use client'
import { createContext, useContext, useState } from 'react'

const TransitionContext = createContext({ color: '#82A0FF', enabled: true })

export const TransitionContextProvider = ({ children }) => {
  const [transitionConfig, setTransitionConfig] = useState({
    color: '#82A0FF',
    enabled: true,
  })

  return (
    <TransitionContext.Provider value={{ transitionConfig, setTransitionConfig }}>
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransitionContext = () => useContext(TransitionContext)