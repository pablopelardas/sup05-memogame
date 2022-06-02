import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Styles/Tarjeta.module.scss';
import './Styles/FlipCard.scss';
import { useState, useEffect } from 'react';
import cn from 'classnames';

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
				className={cn('flip-card-inner', {
					showBack,
				})}
			>
				<div className='card front'>
					<div className='card-body d-flex justify-content-center align-items-center'>
						<p className='card-text fs-1 fw-bold'>Front</p>
					</div>
				</div>
				<div className='card back'>
					<div className='card-body d-flex justify-content-center align-items-center'>
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
