import React, { useState } from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom'
import dice from '../images/dice.svg'

const Nav = () => {
  const [isActive, setActive] = useState(false);

  const styling = <style jsx='true'>{`
  .bar1 {
    transform: ${isActive ? 'translateY(17px) rotate(45deg)' : 'rotate(0)'};
  }
  .bar2 {
    transform: ${isActive ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${isActive ? 0 : 1};
  }
  .bar3 {
    transform: ${isActive ? 'translateY(-17px) rotate(-45deg)' : 'rotate(0)'};
  }
  `}
  </style>

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
        <ul className={!isActive ? 'nav-menu' : null}>
          <div className='nav-item'>
            <Link to={'/'} className='links' style={{ textDecoration: 'none' }}>Home</Link>
          </div>
          <div className='nav-item'>
            <Link to={'/games'} className='links' style={{ textDecoration: 'none' }}>Games</Link>
          </div>
          <div className='nav-item'>
            <Link to={'/about'} className='links' style={{ textDecoration: 'none' }}>About</Link>
          </div>
        </ul>
        <div className={!isActive ? 'hamburger' : null} onClick={() => setActive(!isActive)}>
          <span className='bar bar1'></span>
          <span className='bar bar2'></span>
          <span className='bar bar3'></span>
        </div>
      </nav>
      {styling}
    </header>
  )
}

export default Nav;