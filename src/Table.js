import React from 'react';

const Table = function(props) {
	return (
		<div>
			<h1>Champions:</h1>
			{props.children}
		</div>
	);
};

export default Table;
