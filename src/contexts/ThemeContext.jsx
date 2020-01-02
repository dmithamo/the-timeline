import React from 'react';

const ThemeContext = React.createContext('light');
export default function ThemeContextProvider() {
  return <ThemeContext.Provider value="light" />;
}
