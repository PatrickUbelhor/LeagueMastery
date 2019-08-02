import '../css/Table.css';
import React from 'react';
import MasteryListing from "./MasteryListing";
import Typography from '@material-ui/core/Typography';

function Table(props) {

	const entries = props.masteries.map((mastery) => {
		return <MasteryListing key={mastery.id}
		                       iconUrl={mastery.iconUrl}
		                       champion={mastery.name}
		                       level={mastery.level}
		                       points={mastery.points} />;
	});

	return (
		<div className="masteryTable">
			<Typography variant="h1">Champions:</Typography>
			<div className="list">{entries}</div>
		</div>
	);
}

export default Table;
