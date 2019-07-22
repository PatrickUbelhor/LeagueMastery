import React from 'react';
import MasteryListing from "./MasteryListing";
import '../css/Table.css'

const Table = (props) => {

	const entries = props.masteries.map((mastery) => {
		return <MasteryListing key={mastery.id} iconUrl={mastery.iconUrl} champion={mastery.name} level={mastery.level} points={mastery.points} />
	});

	return (
		<div className="parent">
			<h1>Champions:</h1>
			{entries}
		</div>
	);
};

export default Table;
