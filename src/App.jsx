import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import Auth0ProviderWithHistory from './features/auth/auth0-provider-with-history'
import Routes from './features/routes'
import ThemeContextProvider from './features/theme'

export default function App() {
  useEffect(() => {
    require('./css/pace')
    return () => {}
  }, [])

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Routes />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
