//rafce
// Librerias de React
import React from "react";
// Crear el enrutador(Los links del Ménu)
import { createBrowserRouter } from "react-router-dom";
// 
import Registro from '../pages/Principal';
import Principal from '../pages/Registro';
import NotFound from '../pages/NotFound';
import Information from '../pages/Information';
import Prueba from '../pages/Prueba';
import Ayuda from '../pages/Ayuda';
// Componete Base
import Layout from "../layout/Layout";

// Definir lo que hay dentro del enrutador
const router = createBrowserRouter([
    {
        // Si escribo una ruta que NO existe va a la página de error
        path:"/",
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                // Si la base de la ruta está bien, pero el resto esta mal va a la página de error
                errorElement: <NotFound/>,
                children:[
                    {
                        //Esto va para la pagina Registro
                        path: "/",
                        element: <Principal/>     
                    },
                    {
                        // Esto va para la página Principal
                        path: "/registro",
                        element: <Registro/>        
                    },
                    {
                        // Esto va para la página information
                        path: "/information",
                        element: <Information/>
                    },
                    {
                        // Esto va para la página prueba
                        path: "/prueba",
                        element: <Prueba/>
                    },
                    {
                        //esto es para la página ayuda
                        path: "/ayuda",
                        element: <Ayuda/>
                    }
                ]
            }
        ]
    }
])

export default router