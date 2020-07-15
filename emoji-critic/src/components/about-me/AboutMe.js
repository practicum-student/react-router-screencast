import React from 'react';
import './AboutMe.css';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import MyStory from './MyStory';
import Hobbies from './Hobbies';
import Contact from './Contact';

function AboutMe () {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>About me</h2>
      <ul className="links">
        <li>
          <Link to={`${url}/my-story`}>My Story</Link>
        </li>
        <li>
          <Link to={`${url}/hobbies`}>Hobbies</Link>
        </li>
        <li>
          <Link to={`${url}/contact`}>My Contact Info</Link>
        </li>
      </ul>
      <Route path={`${path}/my-story`}>
        <MyStory />
      </Route>
      <Route path={`${path}/hobbies`}>
        <Hobbies />
      </Route>
      <Route path={`${path}/contact`}>
        <Contact />
      </Route>
    </div>
  )
}

export default AboutMe;