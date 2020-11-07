import { useAuth0 } from '@auth0/auth0-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useThemeContext } from '../features/theme'
import { PrimaryButton, SecondaryButton } from './button'

export function LoginButton() {
  const { loginWithRedirect } = useAuth0()
  const themeCtxt = useThemeContext()
  const theme = themeCtxt.themeState

  return (
    <PrimaryButton theme={theme} onClick={() => loginWithRedirect()}>
      <FontAwesomeIcon icon={['fab', 'github']} />
      <span style={{ marginLeft: '1em' }}>Sign in with GitHub</span>
    </PrimaryButton>
  )
}

export function SignUpButton() {
  const { loginWithRedirect } = useAuth0()
  const themeCtxt = useThemeContext()
  const theme = themeCtxt.themeState

  return (
    <PrimaryButton
      theme={theme}
      onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
    >
      <FontAwesomeIcon icon={['fab', 'github']} />
      <span style={{ marginLeft: '1em' }}>Join with GitHub</span>
    </PrimaryButton>
  )
}

export function LogoutButton() {
  const { logout } = useAuth0()
  return (
    <SecondaryButton
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </SecondaryButton>
  )
}

export default function AuthButtons() {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? <LogoutButton /> : <LoginButton />
}
