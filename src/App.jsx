import React from 'react';
import Routes from './components/containers/Routes';
import ThemeContextProvider from './contexts/theme';

export default function App() {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
}
