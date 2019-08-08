import '../css/Header.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import InputBasgite from '@material-ui/core/InputBase';
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
			region: 'NA',
			term: ''
		};
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		const dropdown = (
			<Select native={false}
			        className="regionSelect"
			        value={this.state.region}
			        onChange={(event) => this.setState({ region: event.target.value })}
			        disableUnderline={true} >
				<MenuItem value="NA" component="li">NA</MenuItem>
				<MenuItem value="EU" component="li">EU</MenuItem>
				<MenuItem value="KR" component="li">KR</MenuItem>
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
