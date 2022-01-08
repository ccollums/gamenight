import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <h1>Gamenight!</h1>
      <nav>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/about'}><li>About</li></Link>
        <Link to={'/games'}><li>Games</li></Link>
      </nav>
    </header>
  )
}

export default Nav;