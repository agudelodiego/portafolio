import React,{useContext} from "react";
import styled from "styled-components";
import programando from "../../Images/programando.svg";
import {Tema} from "../../Components/TemaColor/ThemeContext.js";





// *--------------------------------------------------------------------------------
// Componente encargado de renderizar el contenedro de la home page
const HomePage = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, ${props => props.tema.primario}, ${props => props.tema.terciario});

    @media screen and (min-width: 900px) {
        background-image: linear-gradient(to top left, ${props => props.tema.primario},${props => props.tema.terciario});
        flex-direction: row;
    }
`;
// *--------------------------------------------------------------------------------




// *--------------------------------------------------------------------------------
// Imagen de la home page
const HackerMan = styled.img`
    height: 90%;
    width: auto;

    @media screen and (min-width: 900px) {
        height: 60%;
        width: auto;
    }
`;

// Contenedor de la imagen
const ImgContainer = styled.div`
    height: 40vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 900px) {
        height: 70vh;
        width: 40vw;
        order: 1;
        transform: translateY(-10vh);
    }
`;
// *--------------------------------------------------------------------------------




// *--------------------------------------------------------------------------------
// Contenedor del texto
const TextContainer = styled(ImgContainer)`
    width: 70vw;
    height: 30vh;

    @media screen and (min-width: 900px) {
        order: 2;
        width: 35vw;
        transform: translateY(22vh);
    }
`;

// Texto
const Texto = styled.h1`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.tema.terciario};
`;
// *--------------------------------------------------------------------------------




// Componente encargado de renderizar la home page
const Home = ()=>{

    // Usamos el contexto para acceder al tema de color
    const {tema} = useContext(Tema);

    // Renderizado de los elementos
    return(
        <HomePage tema={tema}>
            <TextContainer>
                <Texto tema={tema}>
                    Hey, hola, soy Diego, un desarrollador front-end Colombiano que le apasiona mucho el mundo de tecnologia
                </Texto>
            </TextContainer>
            <ImgContainer>
                <HackerMan src={programando} alt="Imagen de un programador" />
            </ImgContainer>
        </HomePage>
    );
}
export default Home;