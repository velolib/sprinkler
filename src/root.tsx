import { StrictMode } from 'react'
import { IconContext } from '@phosphor-icons/react'
import App from './App.tsx'

export default function Root() {
  return (
    <StrictMode>
      <IconContext.Provider value={{
        weight: 'regular'
      }}>
        <App />
      </IconContext.Provider>
    </StrictMode>
  )
}