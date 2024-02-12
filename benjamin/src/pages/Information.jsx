//rafce
// Ejemplo
import React from 'react'
// Importar una imágen
import node from "../assets/images/Node.png"
import python from "../assets/images/python.png"
const Information = () => {
  return (
    <div className='Information'>
    <hr></hr>
    <h2>Information</h2>
    <div className='informationCard'>
    <h3>Que es Node.js?</h3>
    <img className='informationcarddataImg' src={node} alt='Logo Node'></img>
      <div  className='informationcardData'>
      <p>Node.js es un entorno de ejecución JavaScript de código abierto y multiplataforma que se utiliza para desarrollar aplicaciones escalables del lado del servidor y de red. Está basado en el motor de ejecución JavaScript V8 de Google Chrome. El procesamiento de una solicitud con Node.js es eficiente y ligero.<br/>

En detalle:<br/>

- Node.js (también conocido como Node) es un entorno en tiempo de ejecución multiplataforma para la capa del servidor, basado en JavaScript.
- Su diseño está inspirado en sistemas como Event Machine de Ruby o Twisted de Python.
- A diferencia de otros entornos, Node.js utiliza un bucle de eventos como construcción en tiempo de ejecución en lugar de una biblioteca.<br/>
- Características clave de Node.js:<br/>
    - Velocidad: Está construido sobre el motor de JavaScript V8 de Google Chrome, lo que lo hace rápido en la ejecución de código.<br/>
    - Asíncrono y controlado por eventos: Las APIs de Node.js son asíncronas y no bloqueantes.<br/>
    - Un subproceso escalable: Utiliza un modelo de un solo subproceso con bucle de eventos, lo que lo hace altamente escalable en comparación con servidores tradicionales como el Servidor HTTP de Apache.<br/>
- Usos comunes de Node.js:<br/>
    - Aplicaciones de transmisión de datos (streaming).<br/>
    - Aplicaciones intensivas de datos en tiempo real.<br/>
    - Aplicaciones vinculadas a E/S.<be/>
    - Aplicaciones basadas en JSON:API.<br/>
    - Aplicaciones de página única.<br/>

Casi todas las marcas más importantes del mercado utilizan Node.js para sus desarrollos..

Origen: Conversación con Bing, 11/2/2024. </p>
  
      </div>
    </div>
    <hr></hr>
    <h2>Que es Python?</h2>
    <div className='informationCard2'>
    <h3>Que es Python?</h3>
    <img className='informationcarddataImg' src={python} alt='Esto es un arbolito'></img>
      <div  className='informationcardData'>
     
      <p>Python es un lenguaje de programación informático que se utiliza para crear sitios web, software, automatizar tareas y realizar análisis de datos. Su versatilidad y facilidad de uso lo han convertido en uno de los lenguajes más populares en la actualidad¹. Aquí tienes más detalles:

- ¿Qué es Python?: Python es un lenguaje de programación de propósito general, lo que significa que se puede utilizar para crear una variedad de programas diferentes y no está especializado en ningún problema específico. Desde el algoritmo de recomendación de Netflix hasta el software que controla los carros autónomos, Python ha sido utilizado en una amplia gama de aplicaciones.

- ¿Para qué se utiliza Python?:
- Desarrollo web: Python se utiliza habitualmente para el desarrollo de sitios web y aplicaciones. Plataformas como Instagram, Netflix y Spotify han sido construidas con Python.
- Automatización o scripting: Python es excelente para automatizar tareas repetitivas. Puedes escribir scripts para realizar acciones como procesar archivos, enviar correos electrónicos o interactuar con bases de datos.
 - Análisis de datos y aprendizaje automático: Python es un elemento básico en la ciencia de datos. Los analistas utilizan Python para cálculos estadísticos, visualizaciones de datos, construcción de algoritmos de aprendizaje automático y manipulación de datos.
 - Pruebas y prototipos de software: Python es ideal para crear prototipos rápidos y realizar pruebas de concepto.
 - Tareas cotidianas: Python también es utilizado por no programadores, como contables y científicos, para tareas cotidianas como organizar finanzas o resolver problemas.</p>
      </div>
    </div>
    <hr></hr>
  </div>
  )
}

export default Information