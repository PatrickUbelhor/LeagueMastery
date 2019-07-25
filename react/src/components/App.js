import React from 'react';
import riot from '../api/Riot';
import Header from './Header';
import Homepage from './Homepage';
import SummonerPage from './SummonerPage';

class App extends React.Component {

	constructor(props) {
		super(props);

		// This is the only time we directly set this.state
		// From now on, we use this.setState({params});
		// Every time state gets changed, render() is called again
		this.state = {
			region: "NA",
			summoner: null,
			masteries: []
		};
	}

	// TODO: Render the summoner when the info is available. Then async call to update masteries. Display load animation.
	onSearchSubmit = async (name) => {
		const summoner = (await riot.get(`/summoner/by-name/${name}`)).data;
		let masteries = (await riot.get(`/mastery/by-summoner/${summoner.id}`)).data;

		this.setState((state, props) => {
			return {
				summoner: summoner,
				masteries: masteries
			};
		});

		console.log(summoner);
	};

	render() {
		const content = this.state.summoner
			? <SummonerPage summoner={this.state.summoner} region={this.state.region} masteries={this.state.masteries}/>
			: <Homepage/>;

		return (
			<div>
				<Header onSubmit={this.onSearchSubmit}/>
				{content}
			</div>
		);
	}
}

export default App;
