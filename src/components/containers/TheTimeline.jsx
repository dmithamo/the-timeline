import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth';

export default function TheTimeline() {
  const authContext = useAuthContext();
  const {
    authState: { isAuthenticated },
  } = authContext;

  return !isAuthenticated ? <Redirect to="/" /> : <h1>Working on it&reg;</h1>;
}
