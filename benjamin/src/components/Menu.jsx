// Importamos React
import React, { useState } from 'react'
// Importamos la imágen
import light from "../assets/icons/idea.png"
import dark from "../assets/icons/idea2.png"
// Se importa la variable global par administrar el color
import { useInteractionContex } from '../context/InteractionContex'
const Menu = () => {
    // Se crea una variable para manejar el estado del menú
    const [state, setState]= useState()
    // Se crea una función que maneja el estado del menú
    const handleMenu = ()=>{
        setState(!state)
    }
    // Se trae la variable color del contexto
    const { color}= useInteractionContex()
    // Se trae el modificador de falso y verdadero del estado del contexto
    const { handleColor}= useInteractionContex()
    // Se trae la variable que contiene el nombre del tema del contexto
    const { colorSelected}= useInteractionContex()
    const { stateC}= useInteractionContex()
    console.log('Color: '+stateC)
    console.log('colorSelected: '+colorSelected)
    return (
        <div  className={`Menu ${colorSelected}`} >
            <ul className='menuList'>
                <li className='menulistItem' onClick={handleMenu}><a href="/" className='menulistitemLink'>Registro</a></li>
                <li className='menulistItem' onClick={handleMenu}><a href="/registro" className='menulistitemLink'>Principal</a></li>
                <li className='menulistItem' onClick={handleMenu}><a href="/information" className='menulistitemLink'>Information</a></li>
                <li className='menulistItem' onClick={handleMenu}><a href="/prueba" className='menulistitemLink'>Prueba</a></li>
                <li className='menulistItem' onClick={handleMenu}><a href="/ayuda" className='menulistitemLink'>Ayuda</a></li>
                
            </ul>
        </div>
    )
}

export default Menu