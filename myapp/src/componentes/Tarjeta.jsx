import React from 'react'
import s from "./Styles/Tarjeta.module.css"

const Tarjeta = ({index,id,name, img, isGuessed, comparando, handleClick}) => {
  return (
    <article className={s.tarjeta} onClick={() => handleClick(index)}>
      {console.log(index)}
      {(isGuessed || comparando.includes(index)) && <>
      <img className={s.img} src={img} alt=''/>
      <p className= {s.nombre}>
        {name}
      </p>
      </>}

    </article>
  )
}

export default Tarjeta