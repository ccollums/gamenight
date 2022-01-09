import React, { useContext } from 'react';
import '../css/GamesPageContainer.css';
import GameInfoCard from './GameInfoCard'
import { GlobalContext } from '../context/GlobalContext';

const GamesPageContainer = () => {
	const { games } = useContext(GlobalContext)

	console.log(games)

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

export default GamesPageContainer; 