import React from 'react';
import './App.css';
import Dashboard from './Dashboard';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Emoji Critic</h1>
      <Route path="/" component={Dashboard} />
    </div>
  );
}

export default App;
