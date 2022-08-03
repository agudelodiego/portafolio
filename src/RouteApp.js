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

 

const RouteApp = ()=>{
    return (
        <ThemeContext>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/acerca" element={<Acerca/>} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/proyectos" element={<h1>Proyectos</h1>} />
                    <Route path="/*" element={<h1>Pagina no encontrada</h1>} />
                </Routes>
            </Router>
        </ThemeContext>
    );
}
export default RouteApp;