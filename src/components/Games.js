import React, { useContext } from 'react';
import '../css/Games.css';
import GameInfoCard from './GameInfoCard'
import { GameContext } from '../context/GameContext';

const Games = () => {
	const { games } = useContext(GameContext)

	const gameCards = games.map(game => {
    return (
      <GameInfoCard
        name={game.name}
        image={game.img}
        id={game.id}
        key={game.id}
				price={game.price}
				minPlayers={game.min_players}
				maxPlayers={game.max_players}
				url={game.url}
      />
    )
  })

	return (
		<section className='game-page-container'>
			{gameCards}
		</section>
	)
}

export default Games; 