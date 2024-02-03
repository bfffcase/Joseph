// Librerias de React
import { Outlet, useNavigation } from "react-router-dom";
// importar estilos
import "../styles/Base.sass"
// Componentes son los espacios que tiene cada página
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="Layout">
        <Header />
        {/* Cunado la página está cargando muestra un texto que dice "Loading" */}
        <main className="Main">
            {
                navigation.state === "loading" &&(
                    <div className="Loading">Loading...</div>
                )
            }
            {/* Contenido de la página */}
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout