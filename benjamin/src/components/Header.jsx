// Librerias de React
import React from 'react'
// Se importa la variable global par administrar el color
import { useInteractionContex } from '../context/InteractionContex'
// Header
  // Logo
  import Logo from "../assets/images/logo.png"
  // Nombre del proyecto
  // Menú
// Estilos

import '../styles/Base.sass'
import Menu from './Menu'
const Header = () => {
    // Se trae la variable que contiene el nombre del tema del contexto
    const { colorSelected}= useInteractionContex()
  return (
    <div  className={`Header ${colorSelected}`}>
      <div  className='headerContainer'>
        <img src={Logo} alt="Logo"  className='headercontainerLogo'/>
        <h1 className='headercontainerName'>Proyecto para aprender React</h1>
      </div>
      <div  className='headerMenu'>
        <Menu />
      </div>
    </div>
  )
}

export default Header