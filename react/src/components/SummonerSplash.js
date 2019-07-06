import '../css/SummonerSplash.css';
import React from 'react';

const SummonerSplash = function(props) {

	return (
		<div className="summoner">
			<img src={`http://ddragon.leagueoflegends.com/cdn/9.13.1/img/profileicon/${props.summoner.profileIconId}.png`} alt="SummonerIcon" />
			<div className="side-info">
				<div className="name">{props.summoner.name}</div>
				<div className="level">{"Level " + props.summoner.summonerLevel}</div>
			</div>
			<div className="below">
				<span className="region">{props.region}</span>
			</div>
		</div>
	);
};

export default SummonerSplash;
