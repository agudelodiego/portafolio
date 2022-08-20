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
                Soy un desarrollador web junior, cuento con muchas de ganas de aprender y desarrollarme como un profesional en este mundo. Me interesa mucho el desarrollo web, tanto en la parte de frontend como en la parte del backend.
            </Texto>
            <Texto tema={tema}>
                A continuación, se muestra una galeria con varios de los proyectos que he realizado, al darle click a alguno de los items se mostrará una breve descripción del proyecto, junto uno o dos botones, los cuales te llevarán a los repositorios de codigo en mi perfil de github o al host donde se encuentra desplegado el proyecto. Ten encuenta que algunos de los proyectos nos tienen un despliegue por lo que solo podras ver el codigo de los mismos.
            </Texto>
            <Galeria />
        </ProyectosSTY>
    );
};
export default Proyectos;