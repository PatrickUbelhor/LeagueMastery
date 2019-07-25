import React from 'react';
import SummonerSplash from './SummonerSplash';
import Table from './Table';

const SummonerPage = (props) => {
	return (
		<div>
			<SummonerSplash summoner={props.summoner} region={props.region}/>
			<Table masteries={props.masteries}/>
		</div>
	);
};

export default SummonerPage;
