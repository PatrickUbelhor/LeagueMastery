import '../css/SummonerSplash.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

function SummonerSplash(props) {

	return (
		<Card>
			<CardContent className="summoner">
				<img src={`http://ddragon.leagueoflegends.com/cdn/9.13.1/img/profileicon/${props.summoner.profileIconId}.png`} alt="SummonerIcon"/>
				<div className="side-info">
					<div className="row">
						<Typography className="name">{props.summoner.name}</Typography>
						<Chip className="region" color="primary" label={props.region} />
					</div>
					<Typography className="level">{"Level " + props.summoner.summonerLevel}</Typography>
				</div>
			</CardContent>
		</Card>
	);
}

export default SummonerSplash;
