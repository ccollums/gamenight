import React, { useContext } from 'react';
import '../css/Standings.css';
import { GameContext } from '../context/GameContext';

const Standings = () => {
  const { winners } = useContext(GameContext)

  const generateStandings =
    winners.reduce((obj, person) => {
      if (!obj[person]) {
        obj[person] = 0
      }
      obj[person]++
      return obj
    }, {})

  const sortStandings = !winners.length ? <p>Currently no standings. Play some games!</p> : Object.entries(generateStandings).sort((a, b) => b[1] - a[1]).map((winner, index) => index <= 2 &&
    <div key={index}>
      <p className="winner">{winner[0]}</p>
      <p className="wins">{winner[1]}</p>
    </div>
  )

  return (
    <section className="standings">
      <h2>Overall Standings</h2>
      <div className="ranks">
        {sortStandings}
      </div>
    </section>
  )
}

export default Standings;