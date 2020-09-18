import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faCode, faUser, faSignOutAlt, fab);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
