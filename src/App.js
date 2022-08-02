import React,{useState} from "react";
import styled from "styled-components";
import RouteApp from "./RouteApp";
import {AnimacionInicio,ContenidoApp} from "./Pages/AnimacionInicio/AnimacionPantalla.js";
import AnimacionIcons from "./Pages/AnimacionInicio/AnimacionIcons";

 





// Elemento que se encargara de contener la aplicacion entera
const ContenedorApp = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    perspective: 400vh;
    perspective-origin: bottom;
    overflow: hidden;
    /* overflow-y: scroll; */
`;


// Funcion encargada de renderizar la aplicacion
const App = ()=>{

    const [estado,setEstado] = useState(false);
    // let ContenedorAppSSR;
    // useEffect(()=>{
    //     ContenedorAppSSR = renderToString(<ContenedorApp/>);
    // });

    return(
        <ContenedorApp>
            <AnimacionInicio className={estado? "esconder":""}>
                <AnimacionIcons click={()=>{setEstado(true)}} />
            </AnimacionInicio>
            <ContenidoApp className={estado? "mostrar":""}>
                <RouteApp />
            </ContenidoApp>
            {/* <RouteApp /> */}
        </ContenedorApp>
    );

};
export default App;