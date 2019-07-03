import riot from './api/Riot';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SummonerSplash from "./components/SummonerSplash";
import Table from "./components/Table";


const conversion = {
	101: "Xerath",
	222: "Jinx",
	268: "Azir",
	51: "Caitlyn",
	111: "Malphite"
};

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
			summonerId: null,
			masteries: []
		};
	}

	nameMastery = (mastery, name) => {
		return {
			name: name,
			level: mastery.championLevel,
			points: mastery.championPoints
		}
	};

	getSummoner = async () => {
		const summoner = (await riot.get("/summoner/by-name/VictoryLeech")).data;
		let masteries = (await riot.get("/mastery/by-summoner/" + summoner.id)).data;

		// TODO: In Type
		// masteries = masteries.map(mastery => mastery + {championName: "Xerath"});

		let namedMasteries = [];
		for (let mastery in masteries) {
			namedMasteries.push(this.nameMastery(mastery, "Xerath"));
		}

		this.setState((state, props) => {
			return {
				username: summoner.name,
				level: summoner.summonerLevel,
				summonerId: summoner.id,
				masteries: namedMasteries
			};
		});

		console.log(summoner.data);
	};

	render() {
		return (
			<div>
				<Header/>
				<SummonerSplash region={this.state.region} username={this.state.username} level={this.state.level}/>
				<button onClick={this.getSummoner}>Load</button>
				<Table masteries={this.state.masteries}/>
			</div>
		);
	}
}

// Render the component
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
