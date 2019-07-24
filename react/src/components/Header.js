import '../css/Header.css';
import React from 'react';

function Header(props) {
	return (
		<div className='container'>
			<span className="title">League Mastery</span>
			<input className="searchBox"/>
		</div>
	);
}

export default Header;
