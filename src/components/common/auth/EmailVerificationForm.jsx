import PropTypes from 'prop-types'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useThemeContext } from '../../../contexts/theme'
import { isValidEmailInput } from '../../../utils/validateInput'
import InlineError from '../../containers/InlineError'
import Loader from '../Loader'
import AuthFormContainer from './AuthFormContainer'

export default function EmailVerificationForm (props) {
  const [value, setValue] = useState('')
  const { onSubmit, onInvalidInput } = props

  function handleInputChange (e) {
    setValue(e.target.value)
  }

  function handleInvalidInput () {
    onInvalidInput(`'${value}' is not a valid email address.`)
  }

  function handleFormSubmit (e) {
    e.preventDefault()
    isValidEmailInput(value) ? onSubmit({ email: value }) : handleInvalidInput()
  }

  const themeContext = useThemeContext()
  const {
    themeState: { darkModeActive }
  } = themeContext

  const { isFetching, error } = props
  return isFetching ? (
    <Loader />
  ) : (
    <AuthFormContainer darkModeActive={darkModeActive}>
      <h2>Get started</h2>

      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <label htmlFor="email-input">
          {error ? (
            <InlineError error={error} />
          ) : (
            'Enter your email address and press Enter.'
          )}
          <input
            required
            type="email"
            placeholder="an@other.com"
            value={value}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
      </form>

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
