import styled from "styled-components";


 
const AnimacionInicio = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #aa98b5;
    transform-origin: bottom;
    transition: transform 1.5s, z-index 1.5s;
    transform: rotateX(0deg) translateZ(0px) translateY(0px);
    backface-visibility: hidden;
    z-index: 100;

    /* Animacion */
    &.esconder{
        transform: rotateX(130deg) translateZ(100vh) translateY(-21vh);
        z-index: 0;
    }
`;
const ContenidoApp = styled.div`
    width: 100vw;
    height: auto;
    position: absolute;
    /* background-color: #6d9773; */
    transform-origin: top;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    transition: transform 1.5s, z-index 1.5s;
    transform: rotateX(-130deg) translateZ(100vh) translateY(21vh);
    z-index: 10;
    backface-visibility: hidden;
    z-index: 0;
    

    /* Animacion */
    &.mostrar{
        transform: rotateX(0deg) translateZ(0px) translateY(0px);
        z-index: 100;
    }
       
`;
const StartBtn = styled.button`
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100px;
    left: 45%;
    z-index: 200;
`;



export {AnimacionInicio,ContenidoApp};