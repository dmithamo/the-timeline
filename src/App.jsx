import React from 'react';
import Routes from './components/containers/Routes';
import ThemeContextProvider from './contexts/theme';
import AuthContextProvider from './contexts/auth';

export default function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

// TODO: re-imagine light mode. The current colors suck
