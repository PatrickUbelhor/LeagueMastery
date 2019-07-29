import '../css/Header.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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
			<Paper className="searchRoot">
				<IconButton className="searchIconButton" aria-label="menu">
					<MenuIcon/>
				</IconButton>
				<Divider className="searchDivider" />
				<InputBase
					className="searchInput"
					placeholder="Search..."
					value={this.state.term}
					onChange={(event) => this.setState({ term: event.target.value })}
					inputProps={{ 'aria-label': 'Search' }}
				/>
				<IconButton className="searchIconButton" aria-label="search">
					<SearchIcon/>
				</IconButton>
			</Paper>
		);

		return (
			<AppBar id="appBar" position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit">League Mastery</Typography>
					{/*<form onSubmit={this.onFormSubmit}>*/}
					{/*</form>*/}
					{searchbar}
				</Toolbar>
			</AppBar>
		);
	}

}

export default Header;
