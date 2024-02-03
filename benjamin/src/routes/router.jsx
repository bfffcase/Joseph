//rafce
// Librerias de React
import React from "react";
// Crear el enrutador(Los links del Ménu)
import { createBrowserRouter } from "react-router-dom";
// Páginas
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Information from '../pages/Information';
import Prueba from '../pages/Prueba';
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
                        // Esto va para la página Home
                        path: "/",
                        element: <Home/>
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
                    }
                ]
            }
        ]
    }
])

export default router