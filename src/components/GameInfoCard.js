import React from 'react';
import '../css/GameInfoCard.css';
import propTypes from 'prop-types';

const GameInfoCard = ({ name, price, image, url, minPlayers, maxPlayers }) => {

	const validateNumberOfPlayers = minPlayers === maxPlayers ? <p>{minPlayers} players</p> : <p>{minPlayers}-{maxPlayers} players</p>

	return (
		<section className='game-page-card'>
			<div className='button-container'>
				<img className='game-page-images' src={image} alt={name} />
				<a href={url} className='buy-button'>Buy</a>
			</div>
			<div className='game-details'>
				<p className='game-name'>{name}</p>
				<h3 className='game-price'>${price}</h3>
				{validateNumberOfPlayers}
			</div>
		</section>
	)
}

export default GameInfoCard;

GameInfoCard.propTypes = {
	name: propTypes.string.isRequired,
	price: propTypes.number.isRequired,
	image: propTypes.string.isRequired,
	gamesPlayed: propTypes.array.isRequired
}
