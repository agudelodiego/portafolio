import styled from "styled-components";



// Componente Textos estilizador
const Texto = styled.p`
    color: ${props => props.tema.terciario};
    width: 100%;
    height: auto;
`;
export default Texto;