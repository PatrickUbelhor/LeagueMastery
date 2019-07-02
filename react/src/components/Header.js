import '../css/Header.css';
import React from 'react';

const Header = function(props) {
	return (
		<div className='container'>
			<span className="title">League Mastery</span>
			<input className="searchBox"/>
		</div>
	);
};

export default Header;
