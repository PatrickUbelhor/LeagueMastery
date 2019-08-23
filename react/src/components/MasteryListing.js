import '../css/MasteryListing.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';

/*
 * TODO: Align "{points} Mastery Points" text on each listing?
 */
function MasteryListing(props) {

	function getRoleChips(roles) {
		let roleChips = [];
		for (let role of roles) {

			let color;
			switch (role.toLowerCase()) {
				case "marksman":
					color = "gold";
					break;
				case "mage":
					color = "blue";
					break;
				case "fighter":
					color = "red";
					break;
				case "assassin":
					color = "purple";
					break;
				case "tank":
					color = "green";
					break;
				case "support":
					color = "pink";
					break;
				default:
					color = "black";
					break;
			}

			let div = <div className="championRoleChip" key={role} style={{ backgroundColor: color}} />;
			roleChips.push(div);
		}

		return roleChips;
	}

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
			{/*<div className="championRoles">*/}
			{/*	{getRoleChips(props.roles)}*/}
			{/*</div>*/}
		</div>
	);
}

export default MasteryListing;
