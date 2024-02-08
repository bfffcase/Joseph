//rafce
// Librerias de React
import React from 'react'
// Importar estilos
import "../styles/Principal.sass"
// Importar una imágen
import Circulo from "../assets/images/circulo.png"
import Taza from "../assets/images/taza.png"
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
      <img className='principalImg' src={Circulo} alt='Esto es un Logo de React'></img>
      <p className='PrincipalText'>React es una biblioteca de código abierto escrita en JavaScript. Fue desarrollada por Facebook en 2013 con el objetivo de facilitar la creación de componentes reutilizables e interactivos para las interfaces de usuario. Aquí tienes algunos puntos clave sobre React:
1.Componentes: React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Puedes crear tus propios componentes, como Thumbnail, LikeButton y Video, y luego combinarlos para formar pantallas, páginas y aplicaciones.
2.Sintaxis JSX: React utiliza una extensión de la sintaxis de JavaScript llamada JSX. Esto permite que el marcado HTML se integre fácilmente con la lógica de renderizado relacionada. Por ejemplo, puedes escribir componentes con código y marcado en el mismo archivo.
3.Interactividad: Los componentes de React reciben datos y devuelven lo que debe aparecer en la pantalla. Puedes actualizar la interfaz en respuesta a interacciones del usuario, como cuando alguien escribe en un campo de texto.
4.Flexibilidad: React no prescribe cómo hacer el enrutamiento o la obtención de datos. Es una biblioteca que te permite agrupar componentes y construir interfaces, pero puedes combinarla con otros frameworks o herramientas para cubrir todo el stack de desarrollo.

En resumen, React es una herramienta poderosa para construir interfaces web de manera rápida, fácil y escalable. Si deseas profundizar más, puedes explorar la documentación oficial y sumergirte en el mundo de React.

Origen: Conversación con Bing, 7/2/2024
(1) React. https://es.react.dev/.
(2) ¿Qué es React JS y cómo funciona? - Next U. https://www.nextu.com/blog/que-es-react-js-como-funciona-rc22/.
(3) ¿Qué es React y para qué usarlo? | Henry Blog. https://blog.soyhenry.com/que-es-react-y-para-que-usarlo/.
(4) Qué es React.js y cómo funciona - Platzi. https://platzi.com/blog/react-js-de-javascript/.
(5) React - Wikipedia, la enciclopedia libre. https://es.wikipedia.org/wiki/React.</p>
      <hr></hr>
      <h2 className='principalTitle'>Aprende Java</h2>
      <h3 className='principalSubtitle'>¿Qué hace un programador web?</h3>
      <img  className='principalImg' src={Taza} alt='Esto es un arbolito'></img>
      <p className='principalText'>Lenguajes de programación web</p>
      <hr></hr>
    </div>
  )
}

export default  Principal