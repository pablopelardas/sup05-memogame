import './App.css';
import NavBar from './componentes/NavBar';
import Contenedor from './componentes/Contenedor';
import Puntaje from './componentes/Puntaje';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<main className='main'>
				<Contenedor />
				<Puntaje />
			</main>
		</div>
	);
}

export default App;
