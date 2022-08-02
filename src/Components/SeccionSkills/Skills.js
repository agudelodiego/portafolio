import styled from "styled-components";
import {useContext} from "react";
import {Tema} from "../TemaColor/ThemeContext";
import Titulo from "../TitulosH2/Titulos";
import GaleriaIcon from "../Galleria/GaleriaIcons";


// Componente ya estilizado
const SkillsSTY = styled.section`
    width: 100%;
    height: auto;
`;




// Funcion encargada de renderizar dicha seccion
const Skills = ()=>{

    // Accedemos al tema de color mediante el hook designado para esto
    const {tema} = useContext(Tema);

    return(
        <SkillsSTY>
            <Titulo tema={tema}>Habilidades</Titulo>
            <GaleriaIcon />
        </SkillsSTY>
    );

};
export default Skills;