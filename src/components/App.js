import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Router Test</h1>
        <Route path="/aboutme">
          <AboutMe/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
