// Import the React and ReactDOM libraries
import Axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom';
import ChampionItem from './ChampionItem';
import Header from './Header';
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
			region: "NA",
			username: "VictoryLeech",
			level: "150"
		};

		this.getSummoner = this.getSummoner.bind(this);
	}

	async getSummoner() {
		const result = await Axios.get("http://localhost:3001/api/summoner/by-name/VictoryLeech");

		this.setState((state, props) => {
			return {
				username: result.data.name,
				level: result.data.summonerLevel
			};
		});

		console.log(result.data);
	}

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
