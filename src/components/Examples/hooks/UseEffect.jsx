import { useState, useEffect } from 'react';

function UseEffect() {
	const [pantalla, setPantalla] = useState(0);
	const [pantalla_2, setPantalla_2] = useState(0);

	useEffect(() => {
		if (pantalla !== 0) {
			setPantalla_2(pantalla_2 + 100);
		}
	}, [pantalla]);

	return (
		<>
			<h1>{pantalla}</h1>
			<button onClick={() => setPantalla(pantalla + 1)}>Incrementar</button>
			<h1>{pantalla_2}</h1>
		</>
	);
}

export default UseEffect;