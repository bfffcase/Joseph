//rafce
// Librerias de React
import React from 'react'
// Importar estilos
import "../styles/Principal.sass"
// Importar una imágen
import Arbolito from "../assets/images/Tecnologia.png"
import Matica from "../assets/images/Java.png"
// Se importa la variable global par administrar el color
import { useInteractionContex } from "../context/InteractionContex";
const Principal = () => {
  // Se trae la variable que contiene el nombre del tema del contexto
  const { pageColorSelected}= useInteractionContex()
  return (
    <div className={`Principal ${pageColorSelected}`}>
      <hr></hr>
      <h2  className='principalTitle'>Principal</h2>
      <h3 className='principalSubtitle'>Desarrollo Web</h3>
      <img className='principalImg' src={Arbolito} alt='Esto es un arbolito'></img>
      <p className='PrincipalText'>La programación web es un proceso que implica diseñar y desarrollar sitios en línea utilizando diversos lenguajes de programación.</p>
      <hr></hr>
      <h2 className='principalTitle'>Ejemplo 2</h2>
      <h3 className='principalSubtitle'>¿Qué hace un programador web?</h3>
      <img  className='principalImg' src={Matica} alt='Esto es un arbolito'></img>
      <p className='principalText'>Lenguajes de programación web</p>
      <hr></hr>
    </div>
  )
}

export default  Principal