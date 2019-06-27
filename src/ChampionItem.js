import './ChampionItem.css'
import React from 'react';

const ChampionItem = function(props) {
	const icon = props.champion + "-icon.png";

	return (
		<div className="champ-item">
			<img src={icon} alt="avatar" />
			<div className="content">
				<span className="name">{props.champion}</span>
				<span className="level">Mastery {props.level}</span>
				<div className="points">{props.points} Mastery Points</div>
			</div>
		</div>
	);
};

export default ChampionItem;
