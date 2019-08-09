import '../css/Header.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/**
 * TODO: Use Material form-control instead of normal form?
 */
class Header extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			region: 'NA1',
			term: ''
		};
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term, this.state.region);
	};

	render() {
		const dropdown = (
			<Select native={false}
			        className="regionSelect"
			        value={this.state.region}
			        onChange={(event) => this.setState({ region: event.target.value })}
			        disableUnderline={true} >
				<MenuItem value="NA1" component="li">NA</MenuItem>
				<MenuItem value="EUN1" component="li">EUN</MenuItem>
				<MenuItem value="EUW1" component="li">EUW</MenuItem>
				<MenuItem value="KR" component="li">KR</MenuItem>
				<MenuItem value="TR1" component="li">TR</MenuItem>
				<MenuItem value="LA1" component="li">LA1</MenuItem>
				<MenuItem value="LA2" component="li">LA2</MenuItem>
				<MenuItem value="BR1" component="li">BR</MenuItem>
				<MenuItem value="RU" component="li">RU</MenuItem>
				<MenuItem value="JP1" component="li">JP</MenuItem>
				<MenuItem value="OC1" component="li">OC</MenuItem>
			</Select>
		);

		const searchbar = (
			<form className="searchForm" onSubmit={this.onFormSubmit}>
				<Paper className="searchPaper">
					{/*<IconButton className="searchIconButton" onClick={this.onFormSubmit} aria-label="search">*/}
					{/*	<SearchIcon />*/}
					{/*</IconButton>*/}
					<InputBase
						className="searchInput"
						placeholder="Search..."
						value={this.state.term}
						onChange={(event) => this.setState({ term: event.target.value })}
						inputProps={{ 'aria-label': 'Search' }}
					/>
					{dropdown}
				</Paper>
			</form>
		);

		return (
			<AppBar id="appBar" position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit">League Mastery</Typography>
					{searchbar}
				</Toolbar>
			</AppBar>
		);
	}

}

export default Header;
