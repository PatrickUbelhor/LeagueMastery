import '../css/MasteryListing.css';
import React from 'react';

/*
 * TODO: Align "{points} Mastery Points" text on each listing?
 */
function MasteryListing(props) {

	return (
		<div className="champ-item">
			<img src={props.iconUrl} alt="Champ Icon"/>
			<div className="content">
				<span className="name">{props.champion}</span>
				<span className="level">Mastery {props.level}</span>
				<div className="points">{Number(props.points).toLocaleString()} Mastery Points</div>
			</div>
		</div>
	);
}

export default MasteryListing;
