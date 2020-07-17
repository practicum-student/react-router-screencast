import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from './Header';
import Content from './Content'
import Footer from './Footer';

import Home from './Home';
import AboutMe from './AboutMe';
import Mission from './Mission';
import Reviews from './Reviews'


function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <h1>React Router Test</h1>
    //     <Route path="/aboutme">
    //       <AboutMe/>
    //     </Route>
    //   </div>
    // </Router>
    <div className="App">
      <Header />
      {/* IF USE CONTENT WITH NO MODIFIERS */}
      {/* <Content>
        <Home />
      </Content> */}

      {/* IF USE JUSIFIED MODIFIER IT WILL MAKE JUSTIFIED CONTENT INSIDE COLUMN */}
      {/* <Content mix="justified">
        <Mission />
      </Content>
      <Footer /> */}

      {/* IF USE CENTERED MODIFIER IT WILL MAKE CENTERED CONTENT INSIDE COLUMN */}
      {/* <Content mix="centered">
        <AboutMe />
      </Content> */}

      <Content>
        <Reviews />
      </Content>
      <Footer /> 


    </div>
  );
}

export default App;
