import React from 'react';
import '../css/GameInfoCard.css';

const GameInfoCard = ({ name, price, image, url, minPlayers, maxPlayers}) => {

	return (
		<section className='game-page-card'>
			<div className='button-container'>
				<img className='game-page-images' src={image} alt={name}/>
				<a href={url} className='buy-button'>Buy</a>
			</div>
			<div className='game-details'>
				<p className='game-name'>{name}</p>
				<h3 className='game-price'>${price}</h3>
				<p className='game-player-count'>{minPlayers}-{maxPlayers} players</p>
			</div>
		</section>
	)
}

export default GameInfoCard; 