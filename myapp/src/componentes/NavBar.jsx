import React from 'react';
import s from './Styles/NavBar.module.css';

export default function NavBar() {
	return (
		<nav className={s.nav}>
			<span className={s.message}>Welcome</span>
		</nav>
	);
}
