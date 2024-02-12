//rafce
import React from 'react'
// Importar una imágen
import Gatico from "../assets/images/uml.png"
import Gatico2 from "../assets/images/uml1.jpg"

const Prueba = () => {
  return (
    <div className='Prueba'>
      <hr></hr>
      <hr></hr>
      <h2>Prueba</h2>
      <div className='pruebaCard'>
        <h3>Tipos de diagramas UML</h3>
        <div className='pruebacardData'>
        <img className='pruebacarddataImg' src={Gatico} alt='Esto es un arbolito'></img>
        
          <p>
Diagramas UML estructurales:<br/>
Diagrama de clases <br/>
Diagrama de componentes <br/>
Diagrama de implementación<br/> 
Diagrama de objetos<br/> 
Diagrama de paquetes<br/>

Diagramas UML de comportamiento:<br/>
Diagramas de actividades <br/>
Diagrama de comunicación <br/>
Diagrama de secuencia <br/>
Diagrama de máquina de estados <br/>
Diagrama de temporización<br/>
Diagrama de caso de uso </p>
         
        </div>
      </div>
      <hr></hr>
      <h2>Tutorial</h2>
      <div className='pruebaCard'>
        <h3>Tutorial - Diagrama de Clases UML</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z0yLerU0g-Q?si=lEkJgcMlhpVCc4vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className='pruebacardData'>
          <p></p>
          
        </div>
        <img className='pruebacarddataImg' src={Gatico2} alt='Esto es un arbolito'></img>
      </div>
      <hr></hr>
    </div>
  )
}

export default Prueba