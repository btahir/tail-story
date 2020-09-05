import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteProjectAlert({ handleSubmit }) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmitAlert = () => {
		handleClose();
		handleSubmit();
	};

	return (
		<div className="inline"> 
			<button onClick={handleClickOpen} className="bg-indigo-600 text-white py-1 px-2 text-xl font-semibold tracking-wide hover:bg-indigo-700 focus:outline-none m-2">
				Delete
          </button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{`Are you sure you want to delete this project?`}</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						No
                  </Button>
					<Button onClick={handleSubmitAlert} color="primary">
						Yes
                  </Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
