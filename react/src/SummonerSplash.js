import './SummonerSplash.css';
import React from 'react';

const SummonerSplash = function(props) {

	return (
		<div className="summoner">
			<img src="Xerath-icon.png" alt="SummonerIcon" />
			<div className="side-info">
				<div className="name">{props.username}</div>
				<div className="level">{"Level " + props.level}</div>
			</div>
			<div className="below">
				<span className="region">{props.region}</span>
			</div>
		</div>
	);
};

export default SummonerSplash;
