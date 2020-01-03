import React from 'react';
import themeReducer, { initialThemeState } from './reducer';
import toggleDarkModeAction from './actions';

const ThemeContext = React.createContext(initialThemeState);
export const useThemeContext = () => React.useContext(ThemeContext);

/**
 * @description Create a wrapper to avail theme state to all children
 * @param {obj} props - Props to pass on to the wrapper ie, <Provider />
 */
export default function ThemeContextProvider(props) {
  const cachedThemeState = JSON.parse(localStorage.getItem('theme'));
  const [themeState, dispatch] = React.useReducer(
    themeReducer,
    cachedThemeState || initialThemeState,
  );

  /* Cache state in local storage to reapply on (manual) page refresh */
  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeState));
  }, [themeState]);

  /**
   * @description Dispatch action to toggle dark mode on/off
   */
  function onDarkModeToggle() {
    dispatch(toggleDarkModeAction());
  }

  const value = React.useMemo(() => ({ themeState, onDarkModeToggle }), [
    themeState,
  ]);

  return <ThemeContext.Provider value={value} {...props} />;
}
