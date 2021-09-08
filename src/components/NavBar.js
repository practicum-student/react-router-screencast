import React from 'react';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <a href="" className="menu__link menu__link_active">Home</a>
      <a href="" className="menu__link">Emoji Reviews</a>
      <a href="" className="menu__link">About Me</a>
    </nav>
  )
}

export default NavBar;