
//rafce
import React from 'react'
// Importar una imágen
import Image from "../assets/images/registro.jpg"
import Image2 from "../assets/images/regist.png"

const Registro = () => {
  return (
    <div className='Registro'>
      <hr></hr>
      <hr></hr>
      <h2>Registro</h2>
      <div className='registroCard'>
        <h3></h3>
        <div className='registrocardData'>
        <img className='registrocarddataImg' src={Image} alt='Esto es un Registro'></img>
        
          <p> </p>
         
        </div>
      </div>
      <hr></hr>
      <h2>Registro</h2>
      <div className='registroCard'>
        <h3></h3>

        <div className='registrocardData'>
          <p></p>
          
        </div>
        <img className='registrocarddataImg' src={Image2} alt='Esto es un Registro'></img>
      </div>
      <hr></hr>
    </div>
  )
}

export default Registro