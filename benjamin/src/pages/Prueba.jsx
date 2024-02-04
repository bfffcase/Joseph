//rafce
import React from 'react'
// Importar una imágen
import Gatico from "../assets/images/herramientas.png"
import Gatico2 from "../assets/images/uml.png"

const Prueba = () => {
  return (
    <div className='Prueba'>
      <hr></hr>
      <hr></hr>
      <h2>prueba</h2>
      <div className='pruebaCard'>
        <h3>
          Esto es un ejemplo de un subtítulo
        </h3>
        <div className='pruebacardData'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!
          </p>
          <img className='pruebacarddataImg' src={Gatico} alt='Esto es un arbolito'></img>
        </div>
      </div>
      <hr></hr>
      <h2>Ejemplo 2</h2>
      <div className='pruebaCard'>
        <h3>Esto es un ejemplo de un subtítulo</h3>
        <div className='pruebacardData'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
          <img className='pruebacarddataImg' src={Gatico2} alt='Esto es un arbolito'></img>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Prueba