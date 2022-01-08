import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom'
import dice from '../images/dice.svg'

const Nav = () => {
  return (
    <header>
      <div className='left-section'>
        <img className='dice' src={dice} alt='logo of single dice'/>
        <div className='title-tagline'>
          <h1 className='appTitle'>gamenight</h1>
          <p>Where friends come to play...</p>
       </div>
      </div>
      <div className='right-section'>
        <nav>
         <Link to={'/'} style={{ textDecoration: 'none' }}><li className='links'>Home</li></Link>
         <Link to={'/games'} style={{ textDecoration: 'none' }}><li className='links'>Games</li></Link>
         <Link to={'/about'} style={{ textDecoration: 'none' }}><li className='links'>About</li></Link>
        </nav>
      </div>
    </header>
  )
}

export default Nav;