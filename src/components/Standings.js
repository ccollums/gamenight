import React, { useContext } from 'react';
import '../css/Standings.css';
import { GlobalContext } from '../context/GlobalContext';

const Standings = () => {
  const { winners } = useContext(GlobalContext)

  const generateStandings = 
    winners.reduce((obj, person) => {
    if (!obj[person]) {
      obj[person] = 0
    } 
    obj[person]++
    return obj
  }, {})

  const sortStandings = Object.entries(generateStandings).sort((a, b) => b[1] - a[1]).map((winner, index) => {
    return <div key={index}>
      <p>{winner[0]}</p>
      <p>{winner[1]}</p>
      </div>
  })

  return(
    <section className="standings">
      <h1>{sortStandings}</h1>
    </section>
  )
}

export default Standings;