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
`;




// Componente que contendra cada uno de los items de la galeria
const Item = styled.div`
    width: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;

    &:hover .hijo{
        opacity: 1;
        transform: scale(1) translateX(150px) translateY(-90px);
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
    width: 300px;
    height: 150px;
    position: absolute;
    top: -50px;
    left: -100px;
    z-index: 100;
    background-color: ${props => props.tema.primario};
    border-radius: 40px 40px 40px 0px;
    display: flex;
    border-top: 2.7px solid ${props => props.tema.terciario};
    border-right: 2.7px solid ${props => props.tema.terciario};
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(0.2) translateX(0px) translateY(0px);
    transition: opacity 0.5s ease, transform 0.8s ease;
`;
const Texto = styled.p`
    color: ${props => props.tema.terciario};
    display: inline;
    position: absolute;
    margin: 0;
    padding: 0 10px;
    box-sizing: border-box;
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
                        Css es el lenguaje que se utiliza para darle estilos a las estructuras creadas de maenera previa con html.
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
            </Item>
            <Item>
                <Img src={github} alt="Imagen de github"/>
                <ItemH2 tema={tema}>Github</ItemH2>
            </Item>
            <Item>
                <Img src={python} alt="Imagen de python"/>
                <ItemH2 tema={tema}>Python</ItemH2>
            </Item>
            <Item>
                <Img className="StyComIcon" src={StyledCom} alt="Imagen de python"/>
                <ItemH2 tema={tema}>Styled-components</ItemH2>
            </Item>
            <Item>
                <Img src={arduino} alt="Imagen de python"/>
                <ItemH2 tema={tema}>Arduino</ItemH2>
            </Item>
        </GalleriaIconsSTY>
    );
};
export default GaleriaIcon;