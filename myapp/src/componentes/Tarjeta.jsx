import React from 'react';
import s from './Styles/Tarjeta.module.scss';

const Tarjeta = ({
	index,
	id,
	name,
	img,
	isGuessed,
	comparando,
	handleClick,
}) => {
	const getContent = () => (
		<div className={s.tarjeta_info}>
			<img className={s.img} src={img} alt='' />
			<p className={s.nombre}>{name}</p>
		</div>
	);

	return (
		<article className={s.tarjeta} onClick={() => handleClick(index)}>
			{(isGuessed || comparando.includes(index)) && getContent()}
		</article>
	);
};

export default Tarjeta;
