import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

export default class ErrorSnackbar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			resetMessage: props.resetMessage,
		}
	}

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.state.resetMessage(null);
	};

	render() {
		return (
			<div>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={this.props.message !== null}
					autoHideDuration={4000}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					message={<span id="message-id">{this.props.message}</span>}
					action={
						<IconButton
							key="close"
							aria-label="close"
							color="inherit"
							onClick={this.handleClose}
						>
							<CloseIcon />
						</IconButton>
					}
				/>
			</div>
		);
	}

};
