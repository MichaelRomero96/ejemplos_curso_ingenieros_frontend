//material ui
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles/themePalette';
//pages
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
//components
import Login from './components/Login';
import { useEffect, useState } from 'react';
import LocalStorage from './components/LocalStorage';
//axios
import obtenerUsuariosAxios from './services/users';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [users, setUsers] = useState([]);
	const [checkLogin, setCheckLogin] = useState(false);
	const [googleUserData, setGoogleUserData] = useState({});
	const [fbUserData, setFbUserData] = useState({});

	const data = {
		user: 'msromero@gmail.com',
		password: '123456'
	};

	useEffect(() => {
		console.log(checkLogin);
	}, [checkLogin]);

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
				<Router>
					<Switch>
						<Route path='/auth'>
							<LoginPage
								users={users}
								checkLogin={checkLogin}
								setCheckLogin={setCheckLogin}
								setGoogleUserData={setGoogleUserData}
								googleUserData={googleUserData}
								fbUserData={fbUserData}
								setFbUserData={setFbUserData}
							/>
						</Route>
						<Route exact path='/'>
							<HomePage
								checkLogin={checkLogin}
								fbUserData={fbUserData}
								googleUserData={googleUserData}
							/>
						</Route>
						<Route path='/localstorage'>
							<LocalStorage />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
