import {useState, useEffect, createContext} from "react";
import Sol from "../../Icons/sol.png";
import Luna from "../../Icons/luna.png";



// Variables encargadas de contener los temas de color
const Tema_claro = {
    primario: "#6b8e4e", //Verde oscuro
    secundario: "#b2c5b2", //Verde claro
    terciario: "#fafaff" //Blanco sucio
};
const Tema_oscuro = {
    primario: "#605399", //Morado
    secundario: "#aa98b5", //Morado claro
    terciario: "#08090a" //Negro
}



const Tema = createContext();


// Creamos un hook personalizado para el manejo del tema de color de la aplicacion
const ThemeContext = ({children})=>{

    // Tema de color
    const [estado,setEstado] = useState(true);
    const [icon,setIcon] = useState(Sol);
    const [tema,setTema] = useState(Tema_oscuro);

    useEffect(()=>{

        if(estado){
            setIcon(Luna);
            setTema(Tema_claro);
        }
        else{
            setIcon(Sol);
            setTema(Tema_oscuro);
        }

    },[estado]);


    const toggleTema = ()=>{
        setEstado(!estado);
    }

    return(
        <Tema.Provider value={{icon,tema,toggleTema}}>
            {children}
        </Tema.Provider>
    );
}
export{ThemeContext,Tema};