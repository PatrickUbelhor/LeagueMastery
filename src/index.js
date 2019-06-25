// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import ChampionListing from './ChampionListing';
import SummonerSplash from "./SummonerSplash";
import Table from "./Table";


// Create a React component
const App = function() {
	return (
		<div className="ui container comments">
			<SummonerSplash username="VictoryLeech" level="150"/>
			<Table>
				<ChampionListing champion="Xerath" points="375,000" />
				<ChampionListing champion="Jhin" points="72,000"/>
				<ChampionListing champion="Alistar" points="0"/>
			</Table>
		</div>
	);
};

// Render the component
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
