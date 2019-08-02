import '../css/MasteryListing.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

/*
 * TODO: Align "{points} Mastery Points" text on each listing?
 */
function MasteryListing(props) {

	return (
		<Card className="champ-card">
			<CardContent className="champ-item">
				<img src={props.iconUrl} alt="Champ Icon"/>
				<div className="content">
					<div id="row1">
						<Typography className="name">{props.champion}</Typography>
						<Typography className="level">Mastery {props.level}</Typography>
					</div>
					<Typography className="points">{Number(props.points).toLocaleString()} Mastery Points</Typography>
				</div>
			</CardContent>
		</Card>
	);
}

export default MasteryListing;
