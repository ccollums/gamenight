import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { BiMessageSquareError } from 'react-icons/bi';
import '../css/ErrorPage.css';

const ErrorPage = () => {
  const { error } = useContext(GameContext)
  return(
    <section className="error-page">
      <BiMessageSquareError size={90}/>
      <h2>{error.message} games. Try again later!</h2>
    </section>
  )

}

export default ErrorPage;