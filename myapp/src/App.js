import './App.css';
import NavBar from './componentes/NavBar';
import Contenedor from './componentes/Contenedor';
import Puntaje from './componentes/Puntaje';
import { useState } from 'react';

function App() {
	const [puntaje, setPuntaje] = useState(0)
	return (
		<div className='App'>
			<NavBar />
			<main className='main'>
				<Contenedor setPuntaje={setPuntaje} />
				<Puntaje puntaje={puntaje} />
			</main>
		</div>
	);
}

export default App;
