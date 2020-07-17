import React from 'react';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <a href="" className="menu__link menu__link_active">Home /</a>
      <a href="" className="menu__link">Reviews /</a>
      <a href="" className="menu__link">About me</a>
    </nav>
  )
}

export default NavBar;