import React from 'react';
import s from './Styles/Tarjeta.module.css';

export default function Tarjeta({ url, id }) {
	return (
		<div className={s.tarjeta}>
			<img className={s.img} src={url} id={id} />
		</div>
	);
}
