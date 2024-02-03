//rafce
// Ejemplo
import React from 'react'
// Importar una imágen
import Burrito from "../assets/images/mariposa.png"
import Burrito2 from "../assets/images/tio.jpeg"
const Information = () => {
  return (
    <div className='Information'>
    <hr></hr>
    <h2>Information</h2>
    <div className='informationCard'>
    <h3>Esto es un ejemplo de un subtítulo</h3>
      <div  className='informationcardData'>
      <img className='informationcarddataImg' src={Burrito} alt='Esto es un arbolito'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
      </div>
    </div>
    <hr></hr>
    <h2>Ejemplo 2</h2>
    <div className='informationCard'>
    <h3>Esto es un ejemplo de un subtítulo</h3>
      <div  className='informationcardData'>
      <img className='informationcarddataImg' src={Burrito2} alt='Esto es un arbolito'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
      </div>
    </div>
    <hr></hr>
  </div>
  )
}

export default Information