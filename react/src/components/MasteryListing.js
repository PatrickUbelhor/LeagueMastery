import '../css/MasteryListing.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';

/*
 * TODO: Align "{points} Mastery Points" text on each listing?
 */
function MasteryListing(props) {

	/*
	 * props.roles possibilities: { marksman, mage, fighter, assassin, tank, support }
	 */
	return (
		<div className="champ-item">
			<img src={props.iconUrl} alt="Champ Icon"/>
			<div className="content">
				<div id="row1">
					<Typography className="name">{props.champion}</Typography>
					<Typography className="level">Mastery {props.level}</Typography>
				</div>
				<Typography className="points">{Number(props.points).toLocaleString()} Points</Typography>
			</div>
		</div>
	);
}

export default MasteryListing;
