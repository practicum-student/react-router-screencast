import React from 'react';
import './NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <a href="/" className="menu__link">Home</a>
      <a href="/reviews" className="menu__link">Emoji Reviews</a>
      <a href="/about-me" className="menu__link">About Me</a>
    </nav>
  )
}

export default NavBar;