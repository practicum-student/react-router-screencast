// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // importing BrowserRouter
import App from './components/App';
import './index.css';

// the import below is beyond the scope of this sprint, don't worry about it yet
import * as serviceWorker from './serviceWorker';

// we'll wrap the App component inside of BrowserRouter here
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);