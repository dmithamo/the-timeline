import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { LoginButton } from '../../components/AuthButtons'
import { useThemeContext } from '../theme'
import AuthFormContainer from './AuthFormContainer'

export default function EmailVerificationForm(props) {
  const themeContext = useThemeContext()
  const {
    themeState: { darkModeActive }
  } = themeContext

  return (
    <AuthFormContainer darkModeActive={darkModeActive}>
      <h2>Get started</h2>

      <LoginButton />
      <p>
        <span>Read the T and C&apos;s first?&nbsp;</span>
        <NavLink to="/the-freaking-docs">The T and C&apos;s</NavLink>
      </p>
    </AuthFormContainer>
  )
}

EmailVerificationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onInvalidInput: PropTypes.func.isRequired,
  error: PropTypes.any.isRequired
}
