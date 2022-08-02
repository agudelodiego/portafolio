import styled from "styled-components";




// Componente titulos
const Titulo = styled.h2`
    width: 100%;
    height: auto;
    font-size: 22px;
    color: ${props => props.tema.terciario};
    text-align: center;

    @media screen and (min-width: 900px) {
        font-size: 30px;
    }
`;
export default Titulo;