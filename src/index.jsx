import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faTimes,
  faHome,
  faToggleOff,
  faToggleOn,
  faSignOutAlt,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(
  faBars,
  faTimes,
  faHome,
  faToggleOff,
  faToggleOn,
  faSignOutAlt,
  faUserAlt,
);
ReactDOM.render(<App />, document.getElementById('root'));
