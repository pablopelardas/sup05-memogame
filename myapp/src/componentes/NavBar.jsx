import React from "react";
import s from './Styles/NavBar.module.css'

export default function NavBar(){
    return(
        <nav className={s.nav}>
            <button>Reset</button>
            <button>Start</button>
        </nav>
    )
};