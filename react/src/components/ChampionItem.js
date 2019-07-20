import '../css/ChampionItem.css'
import React from 'react';

const ChampionItem = function(props) {

	return (
		<div className="champ-item">
			<img src={props.iconUrl} alt="Champ Icon" />
			<div className="content">
				<span className="name">{props.champion}</span>
				<span className="level">Mastery {props.level}</span>
				<div className="points">{props.points} Mastery Points</div>
			</div>
		</div>
	);
};

export default ChampionItem;
