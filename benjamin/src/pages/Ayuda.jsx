//rafce
import React from 'react'
// Importar una imágen
import Gatico from "../assets/images/image.jpg"
import Gatico2 from "../assets/images/mage.jpg"

const Ayuda = () => {
  return (
    <div className='Ayuda'>
      <hr></hr>
      <hr></hr>
      <h2>Ayuda</h2>
      <div className='ayudaCard'>
        <h3>Para aprender mas sobre React</h3>
        <div className='ayudacardData'>
          <p>
            
(1)<a href="https://coderslink.com/talento/blog/que-es-react-y-para-que-proyectos-usarlo/." target="_blank">Qué es React y para qué proyectos usarlo</a><br/>
(2) <a href=" https://ebac.mx/blog/que-es-react." target="_blank">Qué es React y para qué sirve: ventajas y desventajas, casos de uso ....</a><br/>
(3) <a href=" https://es.react.dev/." target="_blank">React.</a><br/>
(4) <a href="https://es.wikipedia.org/wiki/React." target="_blank">React - Wikipedia, la enciclopedia libre.</a>  <br/>
(5) <a href=" https://www.nextu.com/blog/que-es-react-js-como-funciona-rc22/" target="_blank"> ¿Qué es React JS y cómo funciona? - Next U.</a>.<br/>
(6) <a href="https://es.wikipedia.org/wiki/React" target="_blank"> es.wikipedia.org.</a>
          </p>
          <img className='ayudacarddataImg' src={Gatico} alt='Esto es un arbolito'></img>
        </div>
      </div>
      <hr></hr>
      <h2>Ayuda 2</h2>
      <div className='ayudaCard'>
        <h3>Para aprender mas sobre Node.js</h3>
        <div className='ayudacardData'>
          <p>
(1) <a href="https://www.hostinger.mx/tutoriales/que-es-node-js." target="_blanck">Qué es Node.js - Guía para principiantes (+ casos de uso).</a> <br/>      
(2) <a href="https://www.itdo.com/blog/que-es-node-js-y-para-que-sirve/." target="_blanck">¿Qué es Node.js, y para qué sirve? - itdo.com. </a> <br/>
(3) <a href="https://openwebinars.net/blog/que-es-nodejs/." target="_blanck">Qué es NodeJS y para qué sirve | OpenWebinars.</a></p>
          <img className='ayudacarddataImg' src={Gatico2} alt='Esto es un arbolito'></img>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Ayuda