import React from "react";
import { useMediaQuery } from "react-responsive";

// Menu para dispositivos mobiles
import NavMobile from "./NavMobile";

// Menu para desktop
import NavDesktop from "./NavDesktop";




// El componente Navbar se encarga de utilizar el hook de la libreria react-responsive para segun el tamaño del dispositivo mostrar el NabMobile o el NavDesktop
const Navbar = ()=>{

    // Usamos media querys y dependiendo del tamaño del dispositivo se renderizara la barra de navegacion bien sea para desktop o para mobile
    const desktop = useMediaQuery({
        query: "(min-width: 900px)"
    });

    if(desktop){
        return(
            <NavDesktop />
        );
    }
    else{
        return(
            <NavMobile />
        );
    }

}
export default Navbar;