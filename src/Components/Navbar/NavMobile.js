import styled,{keyframes} from "styled-components";
import {NavLink} from "react-router-dom";
import React,{useState,useContext} from "react";
import SVG from "react-inlinesvg";
import IconHome from "../../Icons/home.svg";
import IconAcerca  from "../../Icons/user.svg";
import IconMenu from "../../Icons/menu.svg";
import IconX from "../../Icons/xMenu.svg";
import Logo from "../Logo/Logo.js";
import ToggleTheme from "../TemaColor/ToggleTheme.js";
import {Tema} from "../TemaColor/ThemeContext.js";



// *----------------------------------------------------------------------------------
// Contenedor del NavBar
const Contenedor = styled.nav`
    width: 100%; 
    height: 60px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    box-sizing: border-box;
    background-color: ${props => props.primario};
    color: ${props => props.terciario};
    overflow-x: visible;
    z-index: 100;
`;
// *----------------------------------------------------------------------------------




// *----------------------------------------------------------------------------------
// Contenedor de los elementos NavLinks
export const Link = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: inherit;
    height: 90%;
    width: auto;
    color: inherit;

    &.active{
        border-top: 4px solid ${props => props.terciario}
    }
`;
// *-------------------------------------------------------------------------------





// *-------------------------------------------------------------------------------
// Contenedor para los iconos
const Icon = styled(SVG)`
    height: 20px;
    width: 20px;
    fill: ${props => props.terciario};
`;
// *-------------------------------------------------------------------------------





// *-------------------------------------------------------------------------------
// Contenedor para los elementos NavLinks que iran dentro del menu desplegable
const MenuLink = styled(Link)`
    height: 50px;
    width: 80%;
    font-size: 22px;
    color: inherit;

    &.active{
        border: 3px solid ${props => props.Txcolor};
        border-radius: 12px;
    }
`;

// Contenedor para el icono de menu
const MenuBtn = styled.button`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: inherit;
    cursor: pointer;
`;

// Animaciones
const mostrar = keyframes`
    0%{
        transform: translateX(300px);
        visibility: hidden;
    }
    50%{
        transform: translateX(-10px);
        visibility: visible;
    }
    100%{
        transform: translateX(0px);
        visibility: visible;
    }
`;
const ocultar = keyframes`
    from{
        transform: translateX(0px);
        visibility: visible;
    }
    to{
        transform: translateX(200px);
        visibility: hidden;
    }
`;

// Conteiner del menu desplegable
const MenuContainer = styled.div`
    position: absolute;
    bottom: 60px;
    right: 0;
    display: flex;
    flex-direction: column; 
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    height: 250px;
    border-radius: 10px 10px 0 10px;
    transform: translateX(0px);
    background-color: ${props => props.primario};
    border-bottom: 2px solid ${props => props.terciario};
    overflow-x: visible;
    z-index: 100;
    

    &.oculto{
        animation: ${ocultar} 0.5s ease forwards;
    }
    &.visible{
        animation: ${mostrar} 0.9s ease forwards;
    }
`;
// *-------------------------------------------------------------------------------




// Componente que contendra el menu para dispositivos mobiles
const NavMobile = ()=>{

    // Hook para mostrar u ocultar el menu segun sea el caso
    const [menu,setMenu] = useState(false);

    // Para el tema de color usaremos el contexto
    const {tema} = useContext(Tema);


    const toggleMenu = ()=>{
        // Negamos el estado del menu cada vez que se presione el boton de menu
        setMenu(!menu);
    }


    return(
        <Contenedor primario={tema.primario} secundario={tema.secundario} terciario={tema.terciario}>
            <Link to="/" className={(isActive)=>isActive?"ative":""}>
                <Icon src={IconHome} alt="Icono de inicio" terciario={tema.terciario} />
                Home
            </Link>
            <Link to="/acerca" className={(isActive)=>isActive?"ative":""}>
                <Icon src={IconAcerca} alt="Icono acerca" terciario={tema.terciario} />
                Acerca
            </Link>
            <MenuBtn onClick={toggleMenu}>
                <Icon src={menu? IconX : IconMenu} alt="Icono menu" terciario={tema.terciario} />
            </MenuBtn>
            <MenuContainer className={menu? "visible": "oculto"} primario={tema.primario} secundario={tema.secundario} terciario={tema.terciario}>
                <ToggleTheme />
                <Logo />
                <MenuLink onClick={toggleMenu} to="/contacto" className={(isActive)=>isActive?"ative":""}>Contacto</MenuLink>
                <MenuLink onClick={toggleMenu} to="/proyectos" className={(isActive)=>isActive?"ative":""}>Proyectos</MenuLink>
            </MenuContainer>
        </Contenedor>
    );
}
export default NavMobile;