import styled from "styled-components";
import React from "react";
import LogoIcon from "../../Icons/logo.png";





// Contenedor para la imagen del logo 
const LogoImg = styled.img`
    width: 50px;
    height: 50px;
`;


//Estilos de los textos
const Texto  = styled.h1`
    font-size: inherit;
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding: 0;
`;


// Contenedor para los textos
const TextoConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 60px;
`;


// Contendor del icono entero
const LogoConteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Logo = ()=>{
    return (
        <LogoConteiner>
            <LogoImg src={LogoIcon} />
            <TextoConteiner>
                <Texto>Agudelo</Texto>
                <Texto>Diego</Texto>
            </TextoConteiner>
        </LogoConteiner>
    );
}
export default Logo;