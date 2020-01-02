import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Homepage from './Homepage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={Homepage} />
    </BrowserRouter>
  );
}
