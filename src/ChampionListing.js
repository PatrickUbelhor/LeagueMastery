import React from 'react';

const ChampionListing = function(props) {
	var icon = props.champion + "-icon.png";

	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img src={icon} alt="avatar" />
			</a>
			<div className="content">
				<a href="/" className="author">{props.champion}</a>
				<div className="metadata">
					<span className="date">Mastery 7</span>
				</div>
				<div className="text">{props.points} Mastery Points</div>
			</div>
		</div>
	);
};

export default ChampionListing;
