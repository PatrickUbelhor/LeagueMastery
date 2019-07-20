import React from 'react';
import ChampionItem from "./ChampionItem";
import '../css/Table.css'

const Table = (props) => {

	const entries = props.masteries.map((mastery) => {
		return <ChampionItem key={mastery.id} iconUrl={mastery.iconUrl} champion={mastery.name} level={mastery.level} points={mastery.points} />
	});

	return (
		<div className="parent">
			<h1>Champions:</h1>
			{entries}
		</div>
	);
};

export default Table;
