import '../css/Header.css';
import React from 'react';

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
		return (
			<nav className='container'>
				<span className="title">League Mastery</span>
				<div className="searchDiv">
					<form onSubmit={this.onFormSubmit}>
						<input className="searchBox"
						       value={this.state.term}
						       onChange={(event) => this.setState({ term: event.target.value })}
						/>
					</form>
				</div>
			</nav>
		);
	}

}

export default Header;
