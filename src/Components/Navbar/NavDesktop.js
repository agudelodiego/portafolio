import React,{useContext} from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo.js";
import {Link} from "./NavMobile.js";
import ToggleTheme from "../TemaColor/ToggleTheme.js";
import {Tema} from "../TemaColor/ThemeContext.js";




// *--------------------------------------------------------------------------------
// Estilos para la barra de navegacion
const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background-color: red;
    background-color: ${props => props.tema.primario};
    z-index: 200;
`;
// *--------------------------------------------------------------------------------




// *--------------------------------------------------------------------------------
// Contenedor para los links
const DeskLink = styled(Link)`
    font-size: 18px;
    padding: 0 30px;
    margin: 0 10px;
    font-weight: bold;
    color: ${props => props.tema.terciario};
    /* z-index: 200; */

    &.active{
        border-top: none;
        border-bottom :4px solid ${props => props.tema.terciario}
    }
`;
// *--------------------------------------------------------------------------------





// Componente encargado de renderizar la barra de navegacion
const NavDesktop = ()=>{

    // Para el tema de color usamos hook que nos provee context API
    const {tema} = useContext(Tema);

    return (
        <NavContainer tema={tema}>

            <ToggleTheme />
            <Logo />
            <DeskLink tema={tema} to="/" className={(isActive)=>isActive?"ative":""}>
                Home
            </DeskLink>
            <DeskLink tema={tema} to="/acerca" className={(isActive)=>isActive?"ative":""}>
                Acerca
            </DeskLink>
            <DeskLink tema={tema} to="/proyectos" className={(isActive)=>isActive?"ative":""}>
                Proyectos
            </DeskLink>
            <DeskLink tema={tema} to="/contacto" className={(isActive)=>isActive?"ative":""}>
                Contacto
            </DeskLink>

        </NavContainer>
    );
};
export default NavDesktop;