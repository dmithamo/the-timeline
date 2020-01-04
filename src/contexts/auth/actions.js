export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTHENTICATE_USER_EMAIL = 'AUTHENTICATE_USER_EMAIL';
export const AUTHENTICATE_USER_PIN = 'AUTHENTICATE_USER_PIN';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const RESET_FORM = 'RESET_FORM';

export function makeAuthRequest() {
  return {
    type: AUTH_REQUEST,
  };
}

/* alias authenticateUserFactorOne */
export function authenticateUserEmail(user) {
  return {
    type: AUTHENTICATE_USER_EMAIL,
    user,
  };
}

/* alias authenticateUserFactorTwo */
export function authenticateUserPin() {
  return {
    type: AUTHENTICATE_USER_PIN,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT,
  };
}

export function reportAuthError(error) {
  return {
    type: AUTH_ERROR,
    error,
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}
