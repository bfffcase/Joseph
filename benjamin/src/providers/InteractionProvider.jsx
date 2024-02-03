// Importamos React
// Importamos useState para saber que estado tiene la variable global del contexto
import React, { useState } from "react";
// Importamos el contexto para llenarlo con lo que se quiere
import { InteractionContex } from "../context/InteractionContex";
// Se crear el proveedor de colores
const InteractionProvider = ({ children }) => {
    const [color, setColor] = useState(false);
    const colorSelected = color ? 'Dark' : 'Light'
    const pageColorSelected = color ? 'pageDark' : 'pageLight'
    const handleColor = () => {
        setColor(!color);
    };
    return(
        <InteractionContex.Provider
        value={{
            color,
            handleColor,
            colorSelected,
            pageColorSelected
        }}
        >
              {children}
    </InteractionContex.Provider>
  );
};

export default InteractionProvider;