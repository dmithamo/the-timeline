import AuthContextProvider from './features/auth/context'
import Routes from './features/routes'
import ThemeContextProvider from './features/theme'

export default function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}

// TODO: re-imagine light mode. The current colors suck
