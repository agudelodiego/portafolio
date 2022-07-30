import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";

// Importamos el contexto para el tema oscuro
import {ThemeContext} from "./Components/TemaColor/ThemeContext.js";

// Importamos la homePage
import Home from "./Pages/Home/Home.js";



const RouteApp = ()=>{
    return (
        <ThemeContext>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/acerca" element={<h1>Acerca</h1>} />
                    <Route path="/contacto" element={<h1>Contactame</h1>} />
                    <Route path="/proyectos" element={<h1>Proyectos</h1>} />
                    <Route path="/*" element={<h1>Pagina no encontrada</h1>} />
                </Routes>
            </Router>
        </ThemeContext>
    );
}
export default RouteApp;