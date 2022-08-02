import styled,{keyframes} from "styled-components";
import React from "react";
import html from "../../Icons/html.png";
import css from "../../Icons/css.png";
import js from "../../Icons/js.png";
import python from "../../Icons/python.png";
import reactJs from "../../logo.svg";
import github from "../../Icons/github.png";
import Logo from "../../Components/Logo/Logo.js";





// Imagenes
const Img = styled.img`
    width: 100px;
    height: 100px;
`;


// Contenedore para las imagenes
const Container = styled.div`
    width: 150px;
    height: 150px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;


// Animacion que deberan realizar los iconos
const animarIcons = keyframes`
    0%{
        visibility: hidden;
        transform-origin: top;
        backface-visibility: hidden;
        transform: rotateX(-90deg) translateZ(200px);
    }
    50%{
        visibility: visible;
        transform-origin: top;
        backface-visibility: hidden;
        transform: rotateX(0deg) translateZ(0px);
    }
    51%{
        transform-origin: bottom;
    }
    100%{
        visibility: hidden;
        transform-origin: bottom;
        backface-visibility: hidden;
        transform: rotateX(90deg) translateZ(200px);
    }
`;
const mostrar = keyframes`
    from{
        visibility: hidden;
        transform-origin: top;
        backface-visibility: hidden;
        transform: rotateX(-90deg) translateZ(200px);
    }
    to{
        visibility: visible;
        transform-origin: top;
        backface-visibility: hidden;
        transform: rotateX(0deg) translateZ(0px);
    }
`;

 

// Contenedor que tendra la perspectiva 3d
const Icons = styled.div`
    width: 300px;
    height: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 100px;
    perspective-origin: bottom;

    & .sec1{
        visibility: hidden;
        animation: ${animarIcons} 4s linear 0s forwards;
    }
    & .sec2{
        visibility: hidden;
        animation: ${animarIcons} 4s linear 1.8s forwards;
    }
    & .sec3{
        visibility: hidden;
        animation: ${animarIcons} 4s linear 3.6s forwards;
    }
    & .sec4{
        visibility: hidden;
        animation: ${animarIcons} 4s linear 5.4s forwards;
    }
    & .sec5{
        visibility: hidden;
        animation: ${animarIcons} 4s linear 7.2s forwards;
    }
    & .sec6{
        visibility: hidden;
        animation: ${mostrar} 2s linear 9s forwards;
    }
`;




// Animacion que realizara el boton
const aparecer = keyframes`
    from{
        transform: scale(0.1) rotate(0deg);
        visibility: hidden;
    }
    to{
        transform: scale(1) rotate(360deg);
        visibility: visible;
    }
`;



const StartBtn = styled.button`
    margin-top: 50px;
    width: 150px;
    height: 100px;
    background-color: #605399;
    border: none;
    border-radius: 12px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.6s, box-shadow 0.6s, border-radius 0.6s;
    animation: ${aparecer} 2s ease 10s backwards;

    &:hover{
        transform: scale(1.1);
        box-shadow: 2px 2px 4px #666666;
        border-radius: 50%;
    }

`;



const AnimacionIcons = (props) => {
    return(

        <>
            <Icons>
                <Container className="sec1">
                    <Img className="sec1" src={html} alt="Html icon" />
                </Container>
                <Container className="sec2">
                    <Img src={css} alt="Css icon" />
                </Container>
                <Container className="sec3">
                    <Img src={js} alt="Java Script icon" />
                </Container>
                <Container className="sec4">
                    <Img src={github} alt="Github icon" />
                </Container>
                <Container className="sec5">
                    <Img src={python} alt="Python icon" />
                </Container>
                <Container className="sec6">
                    <Img src={reactJs} alt="React icon" />
                </Container>
            </Icons>
            <StartBtn onClick={props.click}>
                <Logo />
            </StartBtn>
        </>

    );
}
export default AnimacionIcons;