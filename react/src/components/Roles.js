import '../css/Roles.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const Roles = (props) => {
	const entries = props.roles.map((role) => {
		return (
			<div key={role.id}>
				<div className="roleText">{role.id}: {role.points}</div>
				<Divider light={false} className="roleDivider" />
			</div>
		)
	});

	return (
		<Card elevation={2}>
			<CardContent className="roleTableContent">
				{entries}
			</CardContent>
		</Card>
	)
};

export default Roles;
