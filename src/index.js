// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import ChampionListing from './ChampionListing';


// Create a React component
const App = function() {
	return (
		<div className="ui container comments">
			<ChampionListing champion="Xerath" points="375,000" />
			<ChampionListing champion="Jhin" points="72,000"/>
			<ChampionListing champion="Alistar" points="0"/>
		</div>
	);
};

// Render the component
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
