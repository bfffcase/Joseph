//rafce
// Librerias de React
import React from 'react'
// Importar estilos
import "../styles/Home.sass"
// Importar una imágen
import Arbolito from "../assets/images/Tecnologia.png"
import Matica from "../assets/images/Java.png"
// Se importa la variable global par administrar el color
import { useInteractionContex } from "../context/InteractionContex";
const Home = () => {
  // Se trae la variable que contiene el nombre del tema del contexto
  const { pageColorSelected}= useInteractionContex()
  return (
    <div className={`Home ${pageColorSelected}`}>
      <hr></hr>
      <h2  className='homeTitle'>Home</h2>
      <h3 className='homeSubtitle'>Aprende React</h3>
      <img className='homeImg' src={Arbolito} alt='Esto es un arbolito'></img>
      <p className='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
      <hr></hr>
      <h2 className='homeTitle'>Ejemplo 2</h2>
      <h3 className='homeSubtitle'>Esto es otro ejemplo de un subtítulo</h3>
      <img  className='homeImg' src={Matica} alt='Esto es un arbolito'></img>
      <p className='homeText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt sint eius. Optio aperiam blanditiis maiores ex reprehenderit iste, omnis ratione delectus mollitia consectetur. Doloribus veritatis consequuntur et voluptas qui!</p>
      <hr></hr>
    </div>
  )
}

export default Home