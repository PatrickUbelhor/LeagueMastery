
import React from 'react';
import ReactDOM from 'react-dom';
import riot from './api/Riot';
import Header from './components/Header';
import SummonerSplash from "./components/SummonerSplash";
import Table from "./components/Table";

/**
 * TODO: Create a homepage
 */

// Create a React component
class App extends React.Component {
	constructor(props) {
		super(props);

		// This is the only time we directly set this.state
		// From now on, we use this.setState({params});
		// Every time state gets changed, render() is called again
		this.state = {
			region: "NA",
			summoner: {},
			masteries: [],
		};
	}

	getSummoner = async () => {
		const summoner = (await riot.get("/summoner/by-name/VictoryLeech")).data;
		let masteries = (await riot.get(`/mastery/by-summoner/${summoner.id}`)).data;

		this.setState((state, props) => {
			return {
				summoner: summoner,
				masteries: masteries,
			};
		});

		console.log(summoner);
	};

	render() {
		return (
			<div>
				<Header/>
				<SummonerSplash summoner={this.state.summoner} region={this.state.region} />
				<button onClick={this.getSummoner}>Load</button>
				<Table masteries={this.state.masteries} />
			</div>
		);
	}
}

// Render the component
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
