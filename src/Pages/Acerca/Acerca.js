import React,{useContext} from "react";
import {Tema} from "../../Components/TemaColor/ThemeContext.js";
import styled from "styled-components";

// Importacion de componentes
import SobreMi from "../../Components/Seccion_Sobremi/SobreMi.js";
import Skills from "../../Components/SeccionSkills/Skills.js";



// Pagina Acerca estilizado
const AcercaSTY = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(to top left, ${props => props.tema.primario},${props => props.tema.terciario});
`;



// Componente que contendra el condetido de la pagina o seccion
const Contenedor = styled.section`
    width: 100vw;
    height: 92vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    align-items: center;
    padding: 0px 35px 20px 35px;
    box-sizing: border-box;
    background-image: linear-gradient(to bottom,${props => props.tema.primario},${props => props.tema.secundario});

    /* Algunos estilos para el scroll */
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.tema.terciario};
        border-radius: 5px;
    }

    /* Media query para adactar la pagina a dispositivos mas grandes */
    @media screen and (min-width: 900px){
        width: 66vw;
        margin-top: 70px;
        background-color: ${props => props.tema.secundario};
        background-image: none;
    }
`;



// Funcion encargado de renderizar la pagina Acerca
const Acerca = ()=>{

    // Accedemos al contexto medianto el el hook designado para ello
    const {tema} = useContext(Tema);

    return(
        <AcercaSTY tema={tema}>
            <Contenedor tema={tema}>
                <SobreMi />
                <Skills />
            </Contenedor>
        </AcercaSTY>
    );
}
export default Acerca;