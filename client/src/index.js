import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './GlobalStyles';

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
