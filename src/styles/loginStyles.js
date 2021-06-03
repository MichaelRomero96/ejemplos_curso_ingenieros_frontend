import { makeStyles } from '@material-ui/core/styles';

export const loginStyles = makeStyles((theme) => ({
	root: {
		paddingTop: '100px'
	},
	paper: {
		borderRadius: '20px'
		// height: '600px'
	},
	mainContainer: {
		padding: theme.spacing(4, 4, 4, 4) // funcion makeStyles
		// paddingTop: 4,
		// paddingRight: 4,
		// paddingBottom: 4,
		// paddingLeft: 4,
	},
	title: {
		textAlign: 'center'
	},
	inputContainer: {
		padding: theme.spacing(4, 5, 4, 5)
	},
	button: {
		textTransform: 'none'
	},
	paddingButton: {
		padding: theme.spacing(0, 5, 0, 5)
	},
	apisText: {
		textAlign: 'center'
	}
}));
