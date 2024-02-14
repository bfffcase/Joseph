//rafce
// Ejemplo
import React from 'react'
// Importar una imágen
import node from "../assets/images/circulo.png"
import python from "../assets/images/taza.png"
const Principal = () => {
  return (
    <div className='Principal'>
    <hr></hr>
    <h2>Principal</h2>
    
    <div className='principalCard'>
    <img className='principalcarddataImg' src={node} alt='Esto es un logo Java'></img>
     <p>React es una biblioteca de JavaScript desarrollada por Facebook que se ha convertido en uno de los marcos más utilizados para crear aplicaciones web modernas. Su objetivo principal es permitir a los desarrolladores crear interfaces de usuario rápidas y eficientes para sitios web y aplicaciones.
Aquí hay algunos puntos clave sobre <br/>

1. Componentes: React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Puedes crear tus propios componentes de React, como Thumbnail, LikeButton y Video, y luego combinarlos para formar pantallas, páginas y aplicaciones.<br/>
2. Sintaxis JSX: React utiliza una extensión de la sintaxis de JavaScript llamada JSX. Al poner marcado JSX cerca de la lógica de renderizado, los componentes de React son fáciles de crear, mantener y eliminar.<br/>
3. Interactividad: Los componentes de React reciben datos y devuelven lo que debe aparecer en la pantalla. Puedes actualizar la pantalla en respuesta a interacciones del usuario, como cuando alguien escribe en un campo de texto.<br/>
4. Flexibilidad: React está diseñado para permitirte combinar a la perfección componentes escritos por personas, equipos y organizaciones de forma independiente. Ya sea que trabajes solo o con otros desarrolladores, utilizar React se siente igual.<br/>
5. Comunidad activa: React no solo es una biblioteca, sino también una comunidad. Aquí puedes pedir ayuda, encontrar oportunidades y conocer nuevos amigos. Conocerás tanto desarrolladores como diseñadores, principiantes y expertos, investigadores y artistas, maestros y estudiantes.<br/>

En resumen, React es una herramienta poderosa para construir interfaces de usuario dinámicas y escalables en el mundo web. Si deseas crear aplicaciones modernas y eficientes, React es una excelente elección..<br/>

Origen: Conversación con Bing, 9/2/2024.</p>   
    </div>
    <hr></hr>
    <h2>Que es Java?</h2>
    <img className='princioalcarddataImg' src={python} alt='Esto es un arbolito'></img>
    <div className='principalcardData'>
    <p>Java es un lenguaje de programación utilizado para crear software compatible con una gran diversidad de sistemas operativos. Su particularidad radica en que es compilado e interpretado al mismo tiempo. Esto significa que es un lenguaje simplificado que convierte automáticamente el código en instrucciones de máquina.

En un primer momento, el código en Java se compila y luego se traduce a una forma binaria denominada “bytecode”. Posteriormente, este código es compilado e interpretado en el lenguaje nativo solicitado por el sistema. Esta versatilidad permite que el código pueda ejecutarse en diferentes plataformas y sistemas operativos, ya que se puede escribir solo una vez y correr en cualquier equipo. La filosofía original de Java, promovida por su empresa creadora, Sun Microsystems, se resumía en el lema “Write Once, Run Anywhere” (WORA), que en español significa “Escribe una vez, hazlo correr donde sea”.

En resumen, Java es un lenguaje de programación que se utiliza en diversos sectores, como el desarrollo de aplicaciones móviles, la inteligencia artificial, el big data y el blockchain. Su historia se remonta a 1991, cuando James Gosling y su equipo comenzaron a trabajar en su creación. Desde entonces, Java ha evolucionado y se ha convertido en una plataforma confiable para crear y ejecutar aplicaciones y servicios digitales</p>
</div>
    <div className='principalCard'>
    <h3>Aprende: CSS</h3>
      <div  className='principalcardData'>
     
     
      </div>
    </div>
    <hr></hr>
  </div>
  )
}

export default Principal