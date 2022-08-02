import styled from "styled-components";




// Componente que contendra el Slider
const Slider = styled.div`
    width: 280px;
    height: 200px;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    border-radius: 10px;
    margin: 0 auto;

    @media screen and (max-width: 300px){
        &{
            display:none;
        }   
    }


    &::-webkit-scrollbar{
        height: 7px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.tema.terciario};
        border-radius: 5px;
    }
    


    @media screen and (min-width: 1200px){
        width: 500px;
        height: 400px;
    }

    @media screen and (min-width: 600px){
        width: 400px;
        height: 300px;
    }
`;

// Componente encargado de contener la imagen del slider
const Foto  = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    scroll-snap-align: center;
    margin: 0px 30px;
    /* box-shadow: 4px 0px 15px #777777; */
    scroll-snap-stop: always;
    border-radius: 10px;
`;
export {Slider, Foto};