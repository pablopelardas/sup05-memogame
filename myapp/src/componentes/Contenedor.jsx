import React, { useState, useEffect } from 'react';
import s from './Styles/Contenedor.module.css';
import shuffle from 'lodash.shuffle';
import FlipCard from './FlipCard.jsx';
import { connect } from 'react-redux';
import {getTarjetasSup, getTarjetasVideogames} from '../redux/actions'

export function Contenedor(props) {

	const tarjetas = props.tarjetas
	const setPuntaje = props.setPuntaje

	const [comparando, setComparando] = useState([]);
	const [baraja, setBaraja] = useState();


	//localhost:3001/videogames
	//localhost:3001/sup
  
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
			await new Promise((r) => setTimeout(r, 1000));
		}
		setComparando([]);
	};

	let mezcla = function () {
		let aux = [];

		tarjetas.forEach((t) => {
			aux.push({ ...t });
			aux.push({ ...t });
		});
		setBaraja(shuffle(aux));
	};

	useEffect(() => {
		props.getTarjetasVideogames();
	}, []);

	useEffect(() => {
		mezcla()
	},[tarjetas])

	useEffect(() => {
		comparativa();
	}, [comparando, comparativa]);

	let handleClick = function (index) {
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

	return (
		<section>
			<button onClick={handleReset}>reset</button>
			<button onClick={props.getTarjetasSup}>Tarjetas Sup</button>
			<button onClick={props.getTarjetasVideogames}>Tarjeta VideoGame</button>
			<div className={s.Contenedor}>
				{baraja?.map((t, i) => {
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

function mapStateToProps(state){
	return{
		tarjetas: state.tarjetas
	}
}


function mapDispatchToProp(dispatch){
	return{
		getTarjetasSup: () => dispatch(getTarjetasSup()),
		getTarjetasVideogames: () => dispatch(getTarjetasVideogames())
	}	
}

export default connect(mapStateToProps, mapDispatchToProp)(Contenedor);