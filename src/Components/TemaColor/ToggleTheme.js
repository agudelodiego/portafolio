import React,{useContext} from "react";
import styled from "styled-components";
import {Tema} from "./ThemeContext.js";



// Botono que se encargara de cambiar el tema de color
const ThemeBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    background-color: inherit;
    position: absolute;
    top: -20px;
    left: -25px;
    cursor: pointer;

    @media screen and (min-width: 900px) {
        top: 15px;
        left: 20px;
    }
`;


// Estilos para el icono que devuelve el hook personalizado
const IconTheme = styled.img`
    width: 30px;
    height: 30px;
`;



// Componente encargado de renderizar el ThemeBtn
const ToggleTheme = ()=>{

    const {icon,toggleTema} = useContext(Tema);

    return (
        <ThemeBtn>
            <IconTheme src={icon} onClick={toggleTema}/>
        </ThemeBtn>
    );
};
export default ToggleTheme;