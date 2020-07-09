import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const userName = 'xXxemojis_r_lifexXx';

function Dashboard () {
  return (
    <div className="dashboard">
      <p>
       The #1 Destination for Emoji Reviews on the World Wide Web since 2020!
      </p>
      <Link to="/reviews">
        Hello, {userName}! Click here to see my latest reviews!
      </Link>
    </div>
  )
}

export default Dashboard;