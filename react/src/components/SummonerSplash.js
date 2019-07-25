import '../css/SummonerSplash.css';
import React from 'react';

function SummonerSplash(props) {

	let color = 'black';
	switch (props.summoner.summonerLevel) {
		case 5:
			color = 'red';
			break;
		case 6:
			color = 'purple';
			break;
		case 7:
			color = 'light-blue';
			break;
		default:
			break;
	}

	return (
		<div className="summoner">
			<img src={`http://ddragon.leagueoflegends.com/cdn/9.13.1/img/profileicon/${props.summoner.profileIconId}.png`} alt="SummonerIcon"/>
			<div className="side-info">
				<span className="name">{props.summoner.name}</span>
				<span className="region">{props.region}</span>
				<div className="level" style={{ "color": color }}>{"Level " + props.summoner.summonerLevel}</div>
			</div>
		</div>
	);
}

export default SummonerSplash;
