import s from './Styles/Tarjeta.module.scss';
import './Styles/FlipCard.scss';
import { useState, useEffect } from 'react';

function FlipCard({
	index,
	id,
	name,
	img,
	isGuessed,
	comparando,
	handleClick,
}) {
	const [showBack, setShowBack] = useState(false);

	useEffect(() => {
		isGuessed || comparando.includes(index)
			? setShowBack(true)
			: setShowBack(false);
	}, [comparando, isGuessed]);

	return (
		<div className='flip-card-outer' onClick={() => handleClick(index)}>
			<div
				className={`flip-card-inner ${showBack ? 'showBack' : null}`}
			>
				<div className='card front'>
					<div className='card-body'>
						<p className='card-text'>Front</p>
					</div>
				</div>
				<div className='card back'>
					<div className='card-body'>
						<div className={s.tarjeta_info}>
							<img className={s.img} src={img} alt='' />
							<p className={s.nombre}>{name}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlipCard;