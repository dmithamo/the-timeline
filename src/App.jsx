import { useEffect } from 'react'
import './css/index.css'
import AuthContextProvider from './features/auth/context'
import Routes from './features/routes'
import ThemeContextProvider from './features/theme'

export default function App() {
  useEffect(() => {
    require('./css/pace')
    return () => {}
  }, [])

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}

// TODO: re-imagine light mode. The current colors suck
