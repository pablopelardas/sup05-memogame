import { useState, useEffect } from 'react';
import Tarjeta from './Tarjeta';
import s from './Styles/Contenedor.module.css';
import shuffle from 'lodash.shuffle';
import FlipCard from './FlipCard.jsx';

let tarjetasMock = [
	{
		id: 1,
		name: 'Pacman',
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/283px-Pac-Man_Cutscene.svg.png',
		isGuessed: false,
	},
	{
		id: 2,
		name: 'Mario',
		img: 'https://img.unocero.com/2020/07/Super-Mario-Bros-verdadera-nacionalidad-1024x576.jpg',
		isGuessed: false,
	},
	{
		id: 3,
		name: 'Galaga',
		img: 'https://play-lh.googleusercontent.com/6wgqRZPm-mrGSGiScuUfL5qOgSMYHpeA9fLsa4Jah3NYDSUYukDQDAdvoLuDkrz9TMc',
		isGuessed: false,
	},
	{
		id: 4,
		name: 'Metal Slug',
		img: 'https://www3.minijuegosgratis.com/v3/games/thumbnails/4897_1.jpg',
		isGuessed: false,
	},
	{
		id: 5,
		name: 'Street Fighter',
		img: 'https://cdn.akamai.steamstatic.com/steam/apps/1172540/ss_ae8ae2947e0789d322ffc1cdddf0671888336da8.1920x1080.jpg?t=1574816940',
		isGuessed: false,
	},
];

export default function Contenedor({ setPuntaje }) {
	const [tarjetas, setTarjetas] = useState(tarjetasMock);
	const [comparando, setComparando] = useState([]);
	const [baraja, setBaraja] = useState();
	//OnClick se agrega la tarjeta a comparando

	let comparativa = async function () {
		if (comparando.length !== 2) return null;
		if (baraja[comparando[0]].id === baraja[comparando[1]].id) {
			setPuntaje((state) => state + 1);
			setBaraja((state) =>
				state.map((t) => {
					if (t.id === baraja[comparando[0]].id) {
						t.isGuessed = true;
					}
					return t;
				})
			);
		} else {
			await new Promise((r) => setTimeout(r, 500));
		}
		setComparando([]);
	};

	let mezcla = function () {
		// const aux = [...tarjetas, ...tarjetas];
		let aux = [];

		tarjetas.forEach((t) => {
			aux.push({ ...t });
			aux.push({ ...t });
		});
		setBaraja(shuffle(aux));
	};

	useEffect(() => {
		mezcla();
	}, []);
	useEffect(() => {
		console.log(`UseEffect`);
		comparativa();
	}, [comparando, comparativa]);

	let handleClick = function (index) {
		// Comparativa despues pasa al UseEffect
		if (comparando.length === 2) return null;
		if (comparando.includes(index)) return null;
		if (baraja[index].isGuessed) return null;
		setComparando((state) => [...state, index]);
	};

	let handleReset = function () {
		setPuntaje(0);
		setComparando([]);
		mezcla();
	};
	// Funcion comparativa
	// **2 tarjetas en comparando**
	// **verificar si las 2 tarjetas tienen el mismo id**
	//      Si tiene el mismo id, les cambia el estado a adivinadas
	//      Suma el puntaje

	return (
		<section className={s.lobby}>
			<button onClick={() => handleReset()}>Reset</button>
			<div className={s.container}>
				{baraja?.map((t, i) => {
					console.log(`index`, i);
					return (
						<FlipCard
							index={i}
							id={t.id}
							name={t.name}
							img={t.img}
							isGuessed={t.isGuessed}
							comparando={comparando}
							handleClick={handleClick}
						/>
					);
				})}
			</div>
		</section>
	);
}
