import styled from "styled-components";
import React,{useContext,useState,useEffect} from "react";
import {Tema} from "../TemaColor/ThemeContext.js";


// Importamos las imagenes que van a ir en los diferentes items
import brazo from "../../Images/robotic-arm.png";
import api from "../../Images/api.png";
import BDDs from "../../Images/bases-de-datos.png";
import calculadora from "../../Images/calcular.png";
import registradora from "../../Images/caja-registradora.png";
import portafolio from "../../Images/portafolio.png";


// Importamos el hook personalizado que se encarga de devolver la informacion de cada item
import Informacion from "./Informacion.js";

// Importamos el componente resumen
import Resumen from "./Resumen.js";


// Componente galeria estilizado
const GaleriaSTY = styled.section`
    width: 100%;
    height: auto;
    display: grid;
    gap: 40px;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 200px);
    box-sizing: border-box;

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(auto-fill, 250px);
    }
`;



// Items de la galeria
const Item = styled.div`
    width: 200px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    border-radius: 12px;
    transition: box-shadow 0.5s;
    background-color: ${props => props.tema.secundario};
    cursor: pointer;

    &:hover{
        box-shadow: 4px 4px 5px ${props => props.tema.primario};
    }

    @media screen and (min-width: 1200px) {
        width: 250px;
        height: 300px;
    }
`;


// Imagen que llevara cada item
const ItemImg = styled.img`
    width: 60%;
    height: 50%;
    object-fit: cover;
    border-radius: 12px;
`;


// Descripcion de cada item
const ItemDesc = styled.p`
    background-color: ${props => props.tema.primario};
    color: ${props => props.tema.terciario};
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0px;
    border-radius: 0 0 12px 12px;
    margin: 0;
    border-bottom: 5px solid ${props => props.tema.terciario};
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;






// Funcion que se encarga de renderizar la galeria
const Galeria = ()=>{

    // Accedemos al tema de color 
    const{tema} = useContext(Tema);

    // Estados
    const [visible,setVisible] = useState(false);
    const [seleccion,setSeleccion] = useState(Informacion.brazo);

    // Metodo que se encargará de cerrar el cuadro de resumen
    const CerrarResumen = ()=>{
        setVisible(false);
    }

    // Metodo que se encarga de abrir el cuadro de resumen y mostrar la informacion correspondiente
    const AbrirResumen = (param)=>{
        setVisible(true);
        setSeleccion(param);
    }


    useEffect(()=>{
        console.log(seleccion);
    },[seleccion])

    return (
        <GaleriaSTY>
            <Item tema={tema} onClick={()=>AbrirResumen(Informacion.portafolio)}>
                <ItemImg src={portafolio} alt="Imagen de un portafolio web" />
                <ItemDesc tema={tema}>Portafolio</ItemDesc>
            </Item>
            <Item tema={tema} onClick={()=>AbrirResumen(Informacion.API)}>
                <ItemImg src={api} alt="Imagen de una API" />  
                <ItemDesc tema={tema}>Consumo de APIs</ItemDesc>
            </Item>
            <Item tema={tema} onClick={()=>AbrirResumen(Informacion.brazo)}>
                <ItemImg src={brazo} alt="Imagen de un brazo robotico" />
                <ItemDesc tema={tema}>Brazo robotico</ItemDesc>
            </Item>
            <Item tema={tema} onClick={()=>AbrirResumen(Informacion.BBDDs)}>
                <ItemImg src={BDDs} alt="Imagen de bases de datos"/>
                <ItemDesc tema={tema}>Bases de datos</ItemDesc>
            </Item>
            <Item tema={tema} onClick={()=>AbrirResumen(Informacion.calculadora)}>
                <ItemImg src={calculadora} alt="Imagen de una calculadora"/>
                <ItemDesc tema={tema}>Calculadora</ItemDesc>
            </Item>
            <Item tema={tema} onClick={()=>AbrirResumen(Informacion.registradora)}>
                <ItemImg src={registradora} alt="Imagen de una caja registradora"/>
                <ItemDesc tema={tema}>Caja registradora</ItemDesc>
            </Item>
            <Resumen contenido={seleccion.contenido} titulo={seleccion.titulo} repo={seleccion.repo} sitio={seleccion.vista} visible={visible} click={CerrarResumen} />
        </GaleriaSTY>
    );
};
export default Galeria;