//material ui
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles/themePalette';
//components
import Login from './components/Login';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Login />
			</ThemeProvider>
		</>
	);
}

export default App;
