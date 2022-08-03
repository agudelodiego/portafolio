import styled from "styled-components";
import React,{useContext} from "react";
import {Tema} from "../../Components/TemaColor/ThemeContext.js";
import Formulario from "../../Components/Escribeme/Escribeme.js";





// Elemento pagina contacto estilizado
const ContactoSTY = styled.main`
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    background-image: linear-gradient(to top left, ${props => props.tema.secundario},${props => props.tema.primario});
    box-sizing: border-box;
    overflow: auto;

    @media screen and (min-width: 900px) {
        background-image: linear-gradient(to top left, ${props => props.tema.primario},${props => props.tema.secundario});
    }
`;




// Funcion encargada de renderizar todos los elementos de la pagina
const Contacto =()=>{
    
    // Accedemos al tema de color
    const {tema} = useContext(Tema);

    // Renderizado de elementos
    return(
        <ContactoSTY tema={tema}>
            <Formulario />
        </ContactoSTY>
    );
};
export default Contacto;