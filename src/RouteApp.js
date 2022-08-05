import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/NavBar.js";

// Importamos el contexto para el tema oscuro
import {ThemeContext} from "./Components/TemaColor/ThemeContext.js";

// Importamos la homePage
import Home from "./Pages/Home/Home.js";

// Importamos la pagina acerca
import Acerca from "./Pages/Acerca/Acerca.js";

// Importamos la pagina contacto
import Contacto from "./Pages/Contacto/Contacto.js";

// Importamo la pagina de proyectos
import Proyectos from "./Pages/Proyectos/Proyectos.js";

 

const RouteApp = ()=>{
    return (
        <ThemeContext>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/acerca" element={<Acerca/>} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </Router>
        </ThemeContext>
    );
}
export default RouteApp;