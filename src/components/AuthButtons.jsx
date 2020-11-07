import { useAuth0 } from '@auth0/auth0-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useThemeContext } from '../features/theme'
import { PrimaryButton, SecondaryButton } from './button'

export function LoginButton() {
  const { loginWithRedirect } = useAuth0()
  const themeCtxt = useThemeContext()
  const theme = themeCtxt.themeState

  return (
    <PrimaryButton
      theme={theme}
      onClick={() => loginWithRedirect({ display: 'touch' })}
    >
      <FontAwesomeIcon icon={['fab', 'github']} />
      <span style={{ marginLeft: '1em' }}>Sign up with GitHub</span>
    </PrimaryButton>
  )
}

export function LogoutButton() {
  return <SecondaryButton>Logout</SecondaryButton>
}
