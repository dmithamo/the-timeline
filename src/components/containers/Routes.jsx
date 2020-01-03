import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './Homepage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Homepage} />
      </Layout>
    </BrowserRouter>
  );
}
