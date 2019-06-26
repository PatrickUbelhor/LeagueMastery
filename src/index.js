// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import ChampionListing from './ChampionListing';
import ChampionItem from './ChampionItem.js'
import SummonerSplash from "./SummonerSplash";
import Table from "./Table";


// Create a React component
class App extends React.Component {
	constructor(props) {
		super(props);

		// This is the only time we directly set this.state
		// From now on, we use this.setState({params});
		// Every time state gets changed, render() is called again
		this.state = {
			region: "North America",
			username: "VictoryLeech",
			level: "150"
		};
	}

	render() {
		return (
			<div className="ui container comments">
				<SummonerSplash region={this.state.region} username={this.state.username} level={this.state.level}/>
				<Table>
					<ChampionListing champion="Xerath" level="7" points="375,000" />
					<ChampionListing champion="Jhin" level="5" points="72,000"/>
					<ChampionItem champion="Alistar" level="1" points="0"/>
				</Table>
			</div>
		);
	}
}

// Render the component
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
