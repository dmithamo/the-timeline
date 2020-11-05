import { TOGGLE_DARK_MODE } from './actions'

/**
 * Initialize state to a default value
 */
export const initialThemeState = {
  darkModeActive: true,
}

/**
 * @description Amend state in response to an action
 * @param {obj} prevState - Value of state before action
 * @param {obj} action - Description of how to change state : {type, payload?}
 */
export default function themeReducer(prevState = initialThemeState, action) {
  const { type } = action
  switch (type) {
    case TOGGLE_DARK_MODE:
      return { ...prevState, darkModeActive: !prevState.darkModeActive }

    default:
      return prevState
  }
}
