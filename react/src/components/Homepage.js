import '../css/Homepage.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';

function Homepage() {
	return (
		<div>
			<Typography id="text" variant="h4">Search for a Summoner</Typography>
			<div id="disclaimer">
				<Typography id="disclaimerText" variant="caption" color="textSecondary">
					League Mastery isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of
					Riot Games or anyone officially involved in producing or managing League of Legends.
					League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
					League of Legends © Riot Games, Inc.
				</Typography>
			</div>
		</div>
	);
}

export default Homepage;
