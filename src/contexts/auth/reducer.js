import {
  AUTHENTICATE_USER_EMAIL,
  AUTHENTICATE_USER_PIN,
  AUTH_ERROR,
  AUTH_REQUEST,
  LOGOUT,
  RESET_FORM
} from './actions'

export const initialAuthState = {
  isFetching: false,
  isAuthenticated: false,
  user: { email: null, verificationCode: null },
  error: false
}

function updateState (prevState, newValues) {
  return {
    ...prevState,
    ...newValues
  }
}

export default function authReducer (prevState = initialAuthState, action) {
  const { type } = action

  switch (type) {
    case AUTH_REQUEST:
      return updateState(prevState, {
        isFetching: true
      })

    case AUTHENTICATE_USER_EMAIL:
      return updateState(prevState, {
        isFetching: false,
        user: action.user
      })

    case AUTHENTICATE_USER_PIN:
      return updateState(prevState, {
        isFetching: false,
        isAuthenticated: true
      })

    case LOGOUT:
    case RESET_FORM:
      return initialAuthState

    case AUTH_ERROR:
      return updateState(prevState, {
        isFetching: false,
        error: action.error
      })

    default:
      return prevState
  }
}
