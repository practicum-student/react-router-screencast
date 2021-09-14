import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Reviews from './Reviews'
import Dashboard from './Dashboard'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route> 
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
