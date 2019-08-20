import React from 'react';
import riot from '../api/Riot';
import ErrorSnackbar from './ErrorSnackbar';
import Header from './Header';
import Homepage from './Homepage';
import SummonerPage from './SummonerPage';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			region: "NA",
			summoner: null,
			masteries: [],
			message: null
		};
	}

	// TODO: Render the summoner when the info is available. Then async call to update masteries. Display load animation.
	onSearchSubmit = async (name, region) => {
		let summoner = null;
		try {
			const summonerReq = await riot.get(`/summoner/by-name/${name}/${region}`);
			summoner = summonerReq.data;
		} catch (error) {
			if (error.response !== undefined) {
				console.log(error.response);
				this.setSnackbar(error.response.data.message);
				return;
			}

			this.setSnackbar("An unknown error has occurred");
			return;
		}

		const masteriesReq = (await riot.get(`/mastery/by-summoner/${summoner.id}/${region}`));
		const masteries = masteriesReq.data;


		this.setState((state, props) => {
			return {
				region: region,
				summoner: summoner,
				masteries: masteries
			};
		});

		console.log(summoner);
	};

	onTitleClick = () => {
		// Alternatively, could move content into this.state, and change the content directly
		this.setState((state, props) => {
			return {
				summoner: null,
				masteries: []
			}
		});
	};

	setSnackbar = (value) => {
		this.setState((state, props) =>{
			return {
				message: value
			}
		})
	};

	render() {
		const content = this.state.summoner
			? <SummonerPage summoner={this.state.summoner} region={this.state.region} masteries={this.state.masteries}/>
			: <Homepage/>;

		const message = (
			<div>
				<ErrorSnackbar message={this.state.message} resetMessage={this.setSnackbar} />
			</div>
		);


		return (
			<div>
				<Header onTitleClick={this.onTitleClick} onSubmit={this.onSearchSubmit}/>
				{content}
				{message}
			</div>
		);
	}
}

export default App;
