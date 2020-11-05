import Routes from './components/containers/Routes'
import AuthContextProvider from './contexts/auth'
import ThemeContextProvider from './contexts/theme'

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
