import styled from "styled-components";
import React,{useContext} from "react";
import {Tema} from "../TemaColor/ThemeContext.js";


// Importamos el icono de cerrar
import cerrar from "../../Icons/borrar.png";

// Importamos el componente texto
import Textos from "../Textos/Textos.js";

// Importamos el componente titulos
import Titulo from "../TitulosH2/Titulos.js";




// Elemento encargado de contener el cuadro de resumen
const ResumenSTY = styled.div`
    position: fixed;
    top: -55vh;
    width: 80vw;
    height: 50vh;
    visibility: hidden;
    background-color: ${props => props.tema.secundario};
    border-radius: 0 0 12px 12px;
    border: 4px solid ${props => props.tema.primario};
    border-top: none;
    border-bottom: 6px solid ${props=>props.tema.terciario};
    overflow-x: hidden;
    overflow-y: auto;
    transition: top 0.5s ease-out, visibility 0.5s;
    padding: 5vw;
    box-sizing: border-box;

    /* Algunos estilos para el scroll */
    &::-webkit-scrollbar{
        width: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.tema.terciario};
        border-radius: 5px;
    }

    &.visible{
        top: 0;
        visibility: visible;
    }
    
    @media screen and (min-width: 700px){
        width: 50vw;
    }
    /* @media screen and (min-width: 900px){
        padding: 90px 12px 12px 12px;
    } */
`;



// Icono de cerrar ventana
const Cerrar = styled.img`
    position: sticky;
    width: 40px; 
    height: 40px;
    bottom: 0px;
    left: 0px;
    cursor: pointer;
`;



// Elemento encargado de contener los enlaces
const ContenedorEnlaces = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;
    top: 10px;
`;



// Elances de cada uno de los items
const Enlace = styled.a`
    text-decoration: none;
    background-color: ${props => props.tema.primario};
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    color: ${props => props.tema.terciario};
    border: 2px solid ${props => props.tema.terciario};
    transition: box-shadow 0.5s;

    &:hover{
        box-shadow: 4px 4px 4px ${props => props.tema.terciario};
    }
`;



// Componente encargado de renderiaz el cadro de resumen
const Resumen = (props)=>{

    // Accedemos al tema de color
    const {tema} = useContext(Tema);

    return(
        <ResumenSTY tema={tema} className={props.visible? "visible":""}>
            <Titulo tema={tema}>{props.titulo}</Titulo>
            <ContenedorEnlaces>
                {props.sitio &&
                    <Enlace tema={tema} href={props.sitio} target="_blank">Visitar sitio</Enlace>
                }
                <Enlace tema={tema} href={props.repo} target="_blank">Repositorio</Enlace>
            </ContenedorEnlaces>
            <Textos tema={tema}>
                {props.contenido}
            </Textos>
            <Cerrar src={cerrar} alt="Icono de cerrar pestaña" onClick={props.click} />
        </ResumenSTY>
    );

};
export default Resumen;