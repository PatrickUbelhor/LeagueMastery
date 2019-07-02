// Import the React and ReactDOM libraries
import riot from './api/Riot';
import React from 'react';
import ReactDOM from 'react-dom';
import ChampionItem from './components/ChampionItem';
import Header from './components/Header';
import SummonerSplash from "./components/SummonerSplash";
import Table from "./components/Table";


// Create a React component
class App extends React.Component {
	constructor(props) {
		super(props);

		// This is the only time we directly set this.state
		// From now on, we use this.setState({params});
		// Every time state gets changed, render() is called again
		this.state = {
			region: "NA",
			username: "VictoryLeech",
			level: "150",
			summonerId: null
		};
	}

	getSummoner = async () => {
		const result = await riot.get("/summoner/by-name/VictoryLeech");

		// TODO: Get summoner's masteries here

		this.setState((state, props) => {
			return {
				username: result.data.name,
				level: result.data.summonerLevel,
				summonerId: result.data.summonerId
			};
		});

		console.log(result.data);
	};

	render() {
		return (
			<div>
				<Header/>
				<SummonerSplash region={this.state.region} username={this.state.username} level={this.state.level}/>
				<button onClick={this.getSummoner}>Load</button>
				<Table>
					<ChampionItem champion="Xerath" level="7" points="375,000"/>
					<ChampionItem champion="Jhin" level="5" points="72,000"/>
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
