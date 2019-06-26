import React from 'react';

const SummonerSplash = function(props) {

	return (
		<div>
			<a href="/">
				<img src="Xerath-icon.png" alt="SummonerIcon" />
			</a>
			<div>
				<div>{props.region}</div>
				<div>{props.username}</div>
				<div>{"Level " + props.level}</div>
			</div>
		</div>
	);
};

export default SummonerSplash;
