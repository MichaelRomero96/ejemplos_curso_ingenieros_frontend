import axiosClient from "./axiosClient";

const obtenerUsuarios = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	const response = await data.json();
	console.log(response);
};
//sin cliente

// async function obtenerUsuariosAxios() {
// 	try {
// 		const response = await axios.get(
// 			'https://jsonplaceholder.typicode.com/users'
// 		);
// 		console.log(response.data)
// 		setUsers(response.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

//con cliente baseUrl

export default async function obtenerUsuariosAxios(data) {
	try {
		const response = await axiosClient.post('/users', data);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		const response = [];
		return response;
	}
}

// async function obtenerUsuariosAxios() {
// 	try {
// 		const response = await axios.get(
// 			'https://jsonplaceholder.typicode.com/users'
// 		);
// 		console.log(response.data);
// 		setUsers(response.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
