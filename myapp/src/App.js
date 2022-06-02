import './App.css';
import NavBar from './componentes/NavBar';
import Contenedor from './componentes/Contenedor';
import { useState } from 'react';
import Puntaje from './componentes/Puntaje';

function App() {
	const [puntaje, setPuntaje] = useState(0);
	return (
		<div className='App'>
			<NavBar />
			<main>
				<Contenedor setPuntaje={setPuntaje} />
				<Puntaje puntaje={puntaje} />
			</main>
		</div>
	);
}

export default App;
