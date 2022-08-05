import styled from "styled-components";
import React,{useContext} from "react";
import Titulo from "../TitulosH2/Titulos";
import {Tema} from "../TemaColor/ThemeContext";
import { Foto, Slider } from "../Slider/Slider";


// Importamos las fotos que iran en el slider
import Foto1 from "../../Images/Foto1.jpg";
import Foto2 from "../../Images/Foto2.jpg";
import Foto3 from "../../Images/Foto3.jpg";
import Foto4 from "../../Images/Foto4.jpg";
import Texto from "../Textos/Textos.js";



// Componente seccion stilizado
const SobreMiSTY = styled.section`
    width: 100%;
    height: auto;
`;




// Funcion que se encargara de renderizar la seccion sobre mi
const SobreMi = ()=>{

    // Accedemos al tema de color de la aplicacion mediante el hook designado para ello
    const {tema} = useContext(Tema);

    return(
        <SobreMiSTY tema={tema}>
            <Titulo tema={tema}>
                Sobre Mí
            </Titulo>
            <Slider tema={tema}>
                <Foto src={Foto1} alt="Imagen de slider" />
                <Foto src={Foto2} alt="Imagen de slider" />
                <Foto src={Foto3} alt="Imagen de slider" />
                <Foto src={Foto4} alt="Imagen de slider" />
            </Slider>
            <Texto tema={tema}>
                Soy estudiante de Tecnología en Electrónica del ITM, me encuentro cursando último semestre, en espera de grados.
            </Texto>
            <Texto tema={tema}>
                Conocí el mundo de la programación y el desarrollo de software cuando estaba en segundo semestre debido a que en dicho semestre se dictabá la asignatura de programacion básica, donde aprendí las bases de la programación con lenguaje C++. Puedo decir que este punto de mi vida fue el punto de inflexión, el punto donde supe a que me quería dedicar el resto de mi vida.
            </Texto>
            <Texto tema={tema}>
                Comence por tanto un viaje en el mundo de la tecnologia, con hambre de conocimientos y sed experiencia. Me he construido de manera autodidacta, y manteniendo siempre en mente una frase que decía un antiguo miembro de la comunidad de programación ATS: "Si puedes imaginarlo, puedes programarlo";
            </Texto>
        </SobreMiSTY>
    );
}
export default SobreMi;