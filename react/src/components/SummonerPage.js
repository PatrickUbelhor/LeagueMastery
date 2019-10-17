import '../css/SummonerPage.css';
import React from 'react';
import Roles from './Roles';
import SummonerSplash from './SummonerSplash';
import Table from './Table';

const SummonerPage = (props) => {
	return (
		<div className="myDiv">
			<div id="leftPanel">
				<SummonerSplash summoner={props.summoner} region={props.region}/>
				<Roles roles={[
						{
							id: "mage",
							points: 500
						},
						{
							id: "marksman",
							points: 600
						},
						{
							id: "support",
							points: 300
						},
						{
							id: "assassin",
							points: 200
						}
					]}
				/>
			</div>
			<Table masteries={props.masteries}/>
		</div>
	);
};

export default SummonerPage;
