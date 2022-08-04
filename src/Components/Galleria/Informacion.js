


// *--------------------------------------------------------------------------
// Informacion de cada una de los items de la galeria
const Informacion = {

    brazo: {
        titulo: `Brazo robotico arduino`,
        contenido: `Este proyecto corresponde tanto al programa como a los archivos de impresion 3d de un brazo robotico, el cual realice cuando me encontraba cursando la asignatura de robotica en la universida. El brazo esta programado en lenguaje c++ y utilizando el framework de arduino.h. El brazo tiene dos modos de funcionamiento, el primero es un modo manuel, en el cual el brazo es controlado por un operario mediante joisticks, y el segundo es un modo automatico, en el cual el brazo realiza una secuencia de movimientos, previamente calculados.
        De este proyecto puedes observar unicamente los repositorio con el codigo y los archivos de impresion en mi perfil de gitHub.`,
        repo: "https://github.com/agudelodiego/Brazo-robotico",
        vista: false
    },

    API:{
        titulo: `Galeria de peliculas`,
        contenido: `Este proyecto lo realicé con el fin de practicar el consumo de APIs. Corresponde a una galeria de peliculas, la cual se conecta la API de "The Movie Data Base" o simplemente TMDB(link de la pagina: https://www.themoviedb.org/?language=es). La aplicacion permite filtrar entre peliculas polulares, peliculas en cartelera y peliculas proximas a salir. Lastimosamente la API no me permitia acceder acceder a las peliculas, si no unicamente a informacion basica de la pelicula, como el titulo, la descripcion, la imagen o poster de la pelicula, asi como algunos otros datos poco relevante, por lo que ingresas al sitio con el afan de ver peliculas, te llevaras una gran decepcion. Este proyecto lo subi a la plataforma de netlify, por lo que si deseas ver como se ve la aplicacion puedes hacerlo, o si deseas, puedes simplemente ver el repositorio de codigo en mi perfil de github, de igual manera tienes ambos enlaces.`,
        repo: "https://github.com/agudelodiego/My-movie/tree/master",
        vista: "https://diego-gallery.netlify.app"
    },

    BBDDs: {
        titulo: "Implementacion de un pool de conexiones en python",
        contenido: `En este proyecto estaba ralizando una implementacion del patron de diseño DAO(Data Acces Objetj) en una conexion a una base de datos postgreSQL mediante un pool de conexiones con python. Este proyecto no tiene interfaz de usuario, es unicamente codigo, si deseas visitar los repositorios de github, tienes el enlace en la parte de arriba de la ventana.`,
        repo: "https://github.com/agudelodiego/Base-Datos",
        vistas: false
    },

    calculadora: {
        titulo: "Calculadora web",
        contenido: `Este fue uno de los primero proyectos que realice cuando estaba empezando a aprender a Html, Css y Java Script, sobre todo java script por la parte de la logica de manipulacion del DOM(Document Object Model), por tanto es un proyecto al cual le tengo bastante cariño.`,
        repo: "https://github.com/agudelodiego/Calculadora",
        vista: "https://agudelodiego.github.io/Calculadora/"
    },

    registradora: {
        titulo: "Caja Registradora python",
        contenido: `Este proyecto realizado con lenguaje python, corresponde a uno de los primeros proyectos que realice en lenguaje python, y lo realice con el fin de practicar y hacer un "conexion a un base de datos"(en realidad es una conexion que simulo mendiante arrays). Este proyecto no posee interfaz grafica, por lo que no solo podras ver el repositorio de codigo en mi perfil de github`,
        repo: "https://github.com/agudelodiego/CajaRegistradora_Python",
        vista: false
    },

    portafolio: {
        titulo: "Mi portafolio web",
        contenido: `Este proyecto corresponde al aplicativo web en el cual te encuentras en este momento. Este fue un proyecto para el cual emplee la la libreria React Js(https://es.reactjs.org/), la liberia Styled Components(https://styled-components.com/), asi como la libreria React Router V6(https://reactrouter.com/), y de esta manera y utilizando las herramientas de las cuales pone a disposicion react router a la hora de crear rutas. Del mismo modo aproveche la sintaxis JSX de react y la potencia que ofrece la libreria Styled Components para maquetar cada uno de los elementos de este sitio.
        Si te gustas los iconos y las imagenes utilizadas en este sitio deberias viitar: "https://www.flaticon.es/resultados?word=html", pagina de la cual salieron la mayoria de las imagenes e iconos, tambien visita: "https://fontawesome.com/icons", de donde salieron algunos de los iconos e imagenes.`,
        repo: "https://github.com/agudelodiego/portafolio",
        vista: false
    }
}
// *--------------------------------------------------------------------------
export default Informacion;