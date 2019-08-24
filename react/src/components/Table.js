import '../css/Table.css';
import React from 'react';
import MasteryListing from './MasteryListing';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

function Table(props) {

	const entries = props.masteries.map((mastery) => {
		return (
			<div key={mastery.id}>
				<MasteryListing iconUrl={mastery.iconUrl}
			                       champion={mastery.name}
			                       level={mastery.level}
			                       points={mastery.points}
			                       roles={mastery.roles}
				/>
				<Divider light={false} />
			</div>
		)
	});

	return (
		<Card className="masteryTable" elevation={2}>
			<CardContent className="masteryTableContent">
				{entries}
			</CardContent>
		</Card>
	);
}

export default Table;
