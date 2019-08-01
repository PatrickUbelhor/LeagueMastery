import '../css/Table.css';
import React from 'react';
import MasteryListing from "./MasteryListing";

function Table(props) {

	const entries = props.masteries.map((mastery) => {
		return <MasteryListing key={mastery.id}
		                       iconUrl={mastery.iconUrl}
		                       champion={mastery.name}
		                       level={mastery.level}
		                       points={mastery.points} />;
	});

	return (
		<div className="parent">
			<h1>Champions:</h1>
			<div className="list">{entries}</div>
		</div>
	);
}

export default Table;
