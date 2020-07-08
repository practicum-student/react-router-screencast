import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Reviews from './Reviews';
import AboutMe from './AboutMe';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Emoji Critic</h1>
      <Route path="/" component={Dashboard} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/about-me" component={AboutMe} />
    </div>
  );
}

export default App;
