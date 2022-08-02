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
                Sobre Mi
            </Titulo>
            <Slider tema={tema}>
                <Foto src={Foto1} alt="Imagen de slider" />
                <Foto src={Foto2} alt="Imagen de slider" />
                <Foto src={Foto3} alt="Imagen de slider" />
                <Foto src={Foto4} alt="Imagen de slider" />
            </Slider>
            <Texto tema={tema}>
                Soy estudiante de Tecnología en Electronica del ITM, me encuentro cursando utimo semestre, en espera de grados.
            </Texto>
            <Texto tema={tema}>
                Conocí el mundo de la programacion y el desarrollo de software cuando estaba en segundo semestre debido a que en dicho semestre se dictaba la asignatura de programacion basica, donde aprendí las bases de la programacion con lenguaje C++. Puedo decir que este punto de mi vida fue el punto de inflexion, el punto donde supe a que me queria dedicar el resto de mi vida.
            </Texto>
            <Texto tema={tema}>
                Comence por tanto un viaje en el mundo de la tecnologia, con hambre de conocimientos y sed experiencia. Me he construido de manera autodidacta y manteniendo siempre en menta una frase que decia un antiguo miembro de la comunidad de programacion ATS "Si puedes imaginarlo puedes programarlo";
            </Texto>
        </SobreMiSTY>
    );
}
export default SobreMi;