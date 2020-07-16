import React from 'react';
import './AboutUs.css';
import SiteHistory from './SiteHistory';
import SiteMission from './SiteMission';
import { Route, Link, useRouteMatch } from 'react-router-dom';

function AboutUs () {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>About us</h2>
      <ul>
        <li>
          <Link>Site History</Link>
        </li>
        <li>
          <Link>Site Mission</Link>
        </li>
      </ul>
      <Route>
        <SiteHistory />
      </Route>
      <Route>
        <SiteMission />
      </Route>
    </div>
  )
}

export default AboutUs;