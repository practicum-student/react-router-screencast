import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Reviews from './Reviews';
import AboutMe from './about-me/AboutMe';
import AboutUs from './about-us/AboutUs';
import PageNotFound from './PageNotFound';

import { Route, Switch, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="nav">
        <h1 className="nav__header">Emoji Critic</h1>
        <div className="nav__links">
          <NavLink className="nav__link" activeClassName="nav__link_active" exact to="/" >
            Home
          </NavLink>
          <NavLink className="nav__link" activeClassName="nav__link_active" to="/reviews" >
            Reviews
          </NavLink>
          <NavLink className="nav__link" activeClassName="nav__link_active" to="/about-me">
            About Me
          </NavLink>
          <NavLink to="/about-us">
            About Us
          </NavLink>
        </div>
      </nav>
     
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
