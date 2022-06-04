import React, { useState } from 'react';
import Tarjeta from './Tarjeta';
import TarjetasMock from '../store/tarjetasMock';
import s from './Styles/Contenedor.module.css';

// Ejemplo de tarjeta
// {
//   id: 1,
//   name: 'Pacman',
//   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/283px-Pac-Man_Cutscene.svg.png',
// },

export default function Contenedor(img) {
	const [tarjetas, setTarjetas] = useState(TarjetasMock);

	return (
		<div className={s.Contenedor}>
			{tarjetas.length &&
				tarjetas.map((e) => <Tarjeta url={e.img} id={e.id} key={e.id} />)}
		</div>
	);
}
