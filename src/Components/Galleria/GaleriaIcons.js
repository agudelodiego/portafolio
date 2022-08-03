import styled from "styled-components";
import React,{useContext,useState} from "react";
import {Tema} from "../TemaColor/ThemeContext";
import SVG from "react-inlinesvg";

// Importamos los iconos
import html from "../../Icons/html.png";
import css from "../../Icons/css.png";
import github from "../../Icons/github.png";
import js from "../../Icons/js.png";
import python from "../../Icons/python.png";
import ReactJs from "../../Icons/atom.png";
import arduino from "../../Icons/arduino.svg";
import StyledCom from "../../Icons/styled.svg";

// Componente encargado de contener la galleria
const GalleriaIconsSTY = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-auto-rows: 160px;
    gap: 1rem;
    justify-content: center;
    overflow-x: visible;
`;




// Componente que contendra cada uno de los items de la galeria
const Item = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (min-width: 300px) {
        &:hover .hijo{
            opacity: 1;
            transform: scale(0.7) translateX(0px) translateY(-120px) rotate(-40deg);
        }   
    }
    @media screen and (min-width: 1000px) {
        &:hover .hijo{
            opacity: 1;
            transform: scale(0.7) translateX(14px) translateY(-150px) rotate(-40deg);
        }   
    }
`;


// Contenedor para las imagenes
const Img = styled.img`
    width: 100px;
    height: 100px;
`;

// Contenedor para la descripcion de cada item de la galeleria
const ItemH2 = styled.h2`
    width: 100%;
    text-align: center;
    color: ${props => props.tema.terciario};
    font-size: 18px;
`;




// Componentes encargado de la descripcion de cada item de la linsa
const Descripcion = styled.div`
    width: 220px;
    height: 220px;
    position: absolute;
    top: -70px;
    left: -50px;
    z-index: 90;
    background-color: ${props => props.tema.primario};
    border-radius: 50% 50% 50% 0px;
    display: flex;
    border-top: 2.7px solid ${props => props.tema.terciario};
    border-right: 2.7px solid ${props => props.tema.terciario};
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(0.2) translateX(0px) translateY(0px) rotate(-40deg);
    transition: opacity 0.5s ease-in, transform 0.8s ease-out;

    @media screen and (min-width: 1000px) {
        width: 300px;
        height: 300px;
        top: -140px;
        left: -97px;
    }
`;
const Texto = styled.p`
    color: ${props => props.tema.terciario};
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0 10px;
    box-sizing: border-box;
    text-align: center;
    transform: rotate(40deg);
`;




// Componente encargado de hacer el render de los componentes estilizados mediante styled components
const GaleriaIcon = ()=>{

    // Accedemos al tema de color
    const {tema} = useContext(Tema);

    return (
        <GalleriaIconsSTY>
            <Item>
                <Img src={html} alt="Imagen de html"/>
                <ItemH2 tema={tema}>Html</ItemH2>
                <Descripcion tema={tema} className="hijo">
                    <Texto tema={tema}>
                        Html es el lenguaje mediante el cual se construye la estructura de una pagina web o aplicativo web.
                    </Texto>
                </Descripcion>
            </Item>
            <Item>
                <Img src={css} alt="Imagen de css"/>
                <ItemH2 tema={tema}>Css</ItemH2>
                <Descripcion tema={tema} className="hijo">
                    <Texto tema={tema}>
                        Css es el lenguaje que se utiliza para darle estilos a las estructuras creadas de mediante html.
                    </Texto>
                </Descripcion>
            </Item>
            <Item>
                <Img src={js} alt="Imagen de java script"/>
                <ItemH2 tema={tema}>Javascript</ItemH2>
                <Descripcion tema={tema} className="hijo">
                    <Texto tema={tema}>
                        Javascript es el lenguaje de programacion que se utiliza para añadirle interactividad a sitios o aplicaciones web.
                    </Texto>
                </Descripcion>
            </Item>
            <Item>
                <Img src={ReactJs} alt="Imagen de React js"/>
                <ItemH2 tema={tema}>React</ItemH2>
                <Descripcion tema={tema} className="hijo">
                    <Texto tema={tema}>
                        React es una libreria de Javascript pensada para hacer programacion reactiva, es decir, reaccionar a las acciones del usuario.
                    </Texto>
                </Descripcion>
            </Item>
            <Item>
                <Img src={github} alt="Imagen de github"/>
                <ItemH2 tema={tema}>Github</ItemH2>
                <Descripcion tema={tema} className="hijo">
                    <Texto tema={tema}>
                        Github es una red social donde diferentes programadores pueden compartir sus trabajos realizados, asi como colaborar en proyectos de otros programadores.
                    </Texto>
                </Descripcion>
            </Item>
            <Item>
                <Img src={python} alt="Imagen de python"/>
                <ItemH2 tema={tema}>Python</ItemH2>
                <Descripcion tema={tema} className="hijo">
                    <Texto tema={tema}>
                        Python es un lenguaje de programacion bastante utilizado hoy en dia, suele ser muy utilizado en la programacion del lado del servidor y en inteligencia artificial.
                    </Texto>
                </Descripcion>
            </Item>
            <Item>
                <Img className="StyComIcon" src={StyledCom} alt="Imagen de python"/>
                <ItemH2 tema={tema}>Styled-components</ItemH2>
                <Descripcion tema={tema} className="hijo">
                    <Texto tema={tema}>
                        Styled-components es una libreria que le permite a los programadores diseñar componentes de una manera mas sencilla y poderosa.
                    </Texto>
                </Descripcion>
            </Item>
            <Item>
                <Img src={arduino} alt="Imagen de python"/>
                <ItemH2 tema={tema}>Arduino</ItemH2>
                <Descripcion tema={tema} className="hijo">
                    <Texto tema={tema}>
                        Arduino es una plataforma de desarrollo, con la cual se pueden llevar a la realidad diversas ideas relacionadas con el hardware.
                    </Texto>
                </Descripcion>
            </Item>
        </GalleriaIconsSTY>
    );
};
export default GaleriaIcon;