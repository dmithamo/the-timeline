import { createContext, useReducer, useEffect, useMemo, useContext } from 'react';
import {
  authenticateUserEmail,
  authenticateUserPin,
  logoutUser,
  makeAuthRequest,
  reportAuthError,
  resetForm,
} from './actions'
import { decrypt, encrypt } from './encryptor'
import authReducer, { initialAuthState } from './reducer'

const AuthContext = createContext(initialAuthState)

/**
 * @description Handle auth using the context api
 * @param {object} props
 */
export default function AuthContextProvider(props) {
  const cachedAuthState = decrypt(sessionStorage.getItem('auth'))

  const [authState, dispatch] = useReducer(
    authReducer,
    cachedAuthState || initialAuthState,
  )

  useEffect(() => {
    sessionStorage.setItem('auth', encrypt(authState))
  }, [authState])

  /**
   * @description Mark that a request for login/registration is
   * in progress
   */
  function onAuthRequest() {
    dispatch(makeAuthRequest())
  }

  /**
   * @description Add an authenticated user to the auth context
   * pending pin verification
   * @param {object} user
   */
  function onAuthenticateUserEmail(user) {
    dispatch(authenticateUserEmail(user))
  }

  /**
   * @description Complete authentication of user currently
   * in state
   */
  function onAuthenticateUserPin() {
    dispatch(authenticateUserPin())
  }

  /**
   * @description remove the currently authenticated user from state
   */
  function onLogoutUser() {
    dispatch(logoutUser())
  }

  /**
   * @description Indicate that an err arose during registration/login
   * @param {object} error
   */
  function onAuthError(error) {
    dispatch(reportAuthError(error))
  }

  /**
   * @description Reset form when user chooses to restart auth process
   */
  function onResetForm() {
    dispatch(resetForm())
  }

  const value = useMemo(
    () => ({
      authState,
      onAuthRequest,
      onAuthenticateUserEmail,
      onAuthenticateUserPin,
      onLogoutUser,
      onAuthError,
      onResetForm,
    }),
    [authState],
  )
  return <AuthContext.Provider value={value} {...props} />
}

export const useAuthContext = () => useContext(AuthContext)
