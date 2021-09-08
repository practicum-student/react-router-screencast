import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Reviews from './Reviews'
import Dashboard from './Dashboard'


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/about-me">
        <AboutMe />
      </Route> 
    </div>
  );
}

export default App;
