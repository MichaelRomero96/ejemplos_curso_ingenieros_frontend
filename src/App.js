//material ui
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles/themePalette';
//components
import Login from './components/Login';
import { useEffect, useState } from 'react';
//axios
import obtenerUsuariosAxios from './services/users';

function App() {
	const [users, setUsers] = useState([]);

	const data = {
		user: 'msromero@gmail.com',
		password: '123456'
	};

	const getData = async () => {
		const response = await obtenerUsuariosAxios(data);
		setUsers(response);
	};

	useEffect(() => {
		getData(data);
	}, []);
	return (
		<>
			<ThemeProvider theme={theme}>
				<Login users={users} />
			</ThemeProvider>
		</>
	);
}

export default App;
