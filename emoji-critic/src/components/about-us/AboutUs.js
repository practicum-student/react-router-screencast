import React from 'react';
import './AboutUs.css';
import SiteHistory from './SiteHistory';
import SiteMission from './SiteMission';
import { Route } from 'react-router-dom';

function AboutUs () {
  return (
    <div>
      <h2>About us</h2>
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