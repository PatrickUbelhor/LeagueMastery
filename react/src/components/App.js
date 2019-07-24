import React from "react";
import riot from "../api/Riot";
import Header from "./Header";
import Homepage from "./Homepage";
import SummonerSplash from "./SummonerSplash";
import Table from "./Table";

class App extends React.Component {

	constructor(props) {
		super(props);

		// This is the only time we directly set this.state
		// From now on, we use this.setState({params});
		// Every time state gets changed, render() is called again
		this.state = {
			region: "NA",
			summoner: null,
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

		if (this.state.summoner === null) {
			return (
				<div>
					<Header/>
					<Homepage/>
					<button onClick={this.getSummoner}>Load</button>
				</div>
			)
		}

		return (
			<div>
				<Header/>
				<SummonerSplash summoner={this.state.summoner} region={this.state.region} />
				<Table masteries={this.state.masteries} />
			</div>
		);
	}
}

export default App;
