import '../css/Header.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

/**
 * TODO: Use Material form-control instead of normal form?
 */
class Header extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		const searchbar = (
			<form className="searchForm" onSubmit={this.onFormSubmit}>
				<Paper className="searchPaper">
					<IconButton className="searchIconButton" aria-label="menu">
						<MenuIcon/>
					</IconButton>
					<InputBase
						className="searchInput"
						placeholder="Search..."
						value={this.state.term}
						onChange={(event) => this.setState({ term: event.target.value })}
						inputProps={{ 'aria-label': 'Search' }}
					/>
					<IconButton className="searchIconButton" onClick={this.onFormSubmit} aria-label="search">
						<SearchIcon />
					</IconButton>
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
