import styled from "styled-components";
import React,{useContext} from "react";
import {Tema} from "../../Components/TemaColor/ThemeContext.js";
import Galeria from "../../Components/Galleria/GaleriaProyectos.js";
import Titulo from "../../Components/TitulosH2/Titulos.js";
import Texto from "../../Components/Textos/Textos.js";




// Componente encargado de contener la pagina
const ProyectosSTY = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-image: linear-gradient(to top left, ${props => props.tema.secundario},${props => props.tema.primario});
    box-sizing: border-box;
    overflow: auto;
    padding: 20px 15px 70px 15px;

    /* Algunos estilos para el scroll */
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.tema.terciario};
        border-radius: 5px;
    }

    @media screen and (min-width: 900px) {
        background-image: linear-gradient(to top left, ${props => props.tema.primario},${props => props.tema.secundario});
        padding: 90px 17vw 20px 17vw;
    }
`;




// Funcion encargada de renderizar la pagina de proyectos
const Proyectos = ()=>{

    // Accedemos al tema de color
    const {tema} = useContext(Tema);

    return (
        <ProyectosSTY tema={tema}>
            <Titulo tema={tema}>Proyectos</Titulo>
            <Texto tema={tema}>
                Soy un desarrollador junior, por lo que aun no cuento con una gran cantidad de proyectos que poder mostrar, ni tampoco son proyectos muy impresionantes, con lo que si cuento es con las ganas de aprender y crecer profesionalmente.
            </Texto>
            <Texto tema={tema}>
                Puedes ver algunos de los proyectos que he realizado. Al darle click a alguno de los items podrás ver una pequeña descripción del proyecto, asi como los respectivos enlaces a los respositorios.
            </Texto>
            <Galeria />
        </ProyectosSTY>
    );
};
export default Proyectos;