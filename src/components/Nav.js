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
  .nav-item {
    background-color: ${isActive ? '#fff' : 'transparent'};
    padding: ${isActive ? '.5em' : 'transparent'};
  }
  .active-nav-menu {
    position: ${isActive ? 'absolute' : null};
    right: ${isActive ? '0' : null};
    top: ${isActive ? '137px' : '0'};
    box-shadow: ${isActive ? '0 3px 9px -3px rgba(0, 0, 0, .3)' : '0'};
    z-index: ${isActive ? '1' : null};
  }
  .links {
    color:  ${isActive ? '#F65C00' : '0'};
  }
  `}
  </style>

  return (
    <header>
      <div className='logo-title'>
        <Link to='/'><img className='dice' src={dice} alt='logo of single dice' /></Link>
        <Link to='/' className='title-tagline'>
          <h1>gamenight</h1>
          <p>where friends come to play...</p>
        </Link>
      </div>
      <nav>
        <div className={!isActive ? 'hamburger' : null} onClick={() => setActive(!isActive)}>
          <span className='bar bar1'></span>
          <span className='bar bar2'></span>
          <span className='bar bar3'></span>
        </div>
        <ul className={!isActive ? 'nav-menu' : 'active-nav-menu'}>
          <div className='nav-item'>
            <Link to={'/'}
              className='links'
              style={{ textDecoration: 'none' }}
              onClick={() => isActive && setActive(!isActive)} >home</Link>
          </div>
          <div className='nav-item'>
            <Link to={'/games'}
              className='links'
              style={{ textDecoration: 'none' }}
              onClick={() => isActive && setActive(!isActive)}>games</Link>
          </div>
          <div className='nav-item'>
            <Link to={'/about'}
              className='links'
              style={{ textDecoration: 'none' }}
              onClick={() => isActive && setActive(!isActive)}>about</Link>
          </div>
        </ul>
      </nav>
      {styling}
    </header>
  )
}

export default Nav;