import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom'
import dice from '../images/dice.svg'

const Nav = () => {
  return (
    <header>
      <div className='logo-title'>
        <img className='dice' src={dice} alt='logo of single dice' />
        <div className='title-tagline'>
          <h1>gamenight</h1>
          <p>Where friends come to play...</p>
        </div>
      </div>
        <nav>
          <Link className='links' to={'/'}>Home</Link>
          <Link className='links' to={'/games'} style={{ textDecoration: 'none' }}>Games</Link>
          <Link className='links' to={'/about'}>About</Link>
        </nav>
    </header>
  )
}

export default Nav;