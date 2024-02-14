// Registro.js

import React from 'react'

const Registro = () => {
  return (
    <div className='Registro'>
      <h1>Registro</h1>
      <p>Registrate y empieza gratis</p>
      <form className="form">
        <label htmlFor='username'>Nombre de usuario:</label>
        <input type='text' id='username' name='username' />

        <label htmlFor='email'>Correo electrónico:</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='password'>Contraseña:</label>
        <input type='password' id='password' name='password' />

        <button type='submit'>Registrarse</button>
      </form>
    </div>
  )
}

export default Registro

