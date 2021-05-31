import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00a896'
		},
		secondary: {
			main: '#006466'
		}
	},
    typography: {
        fontFamily: "'Ubuntu', 'sans-serif'"
    }
});

export const primaryColor = theme.palette.primary.main;
export const secondaryColor = theme.palette.secondary.main;
