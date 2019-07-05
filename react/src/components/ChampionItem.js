import '../css/ChampionItem.css'
import React from 'react';

const ChampionItem = function(props) {
	const icon = "/champ-icons/" + props.champion + ".png";

	return (
		<div className="champ-item">
			<img src={icon} alt="Champ Icon" />
			<div className="content">
				<span className="name">{props.champion}</span>
				<span className="level">Mastery {props.level}</span>
				<div className="points">{props.points} Mastery Points</div>
			</div>
		</div>
	);
};

export default ChampionItem;
