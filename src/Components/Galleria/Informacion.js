


// *--------------------------------------------------------------------------
// Informacion de cada una de los items de la galeria
const Informacion = {

    brazo: {
        titulo: `Brazo robótico arduino`,
        contenido: `Este proyecto corresponde tanto al programa como a los archivos de impresión 3d de un brazo robótico, el cual realicé cuando me encontrabá cursando la asignatura de robótica en la universidad. El brazo esta programado en lenguaje c++ y utilizando el framework de arduino.h. Tiene dos modos de funcionamiento, el primero es un modo manual, en el cual el brazo es controlado por un operario mediante joysticks, y el segundo es un modo automático, en el cual el brazo realiza una secuencia de movimientos previamente calculados para simular un entorno de producción industrial, en el que robot tenga que manipular objetos que se desplazan por una banda transportadora.
        De este proyecto se puede observar unicamente los repositorio con el codigo y los archivos de impresión en mi perfil de gitHub.`,
        repo: "https://github.com/agudelodiego/Brazo-robotico",
        vista: false
    },

    API:{
        titulo: `Galería de películas`,
        contenido: `Este proyecto lo realicé con el fin de poner en practica mis conocimientos acerca del consumo de APIs. Corresponde a una galería de películas, la cual se conecta la API de "The Movie Data Base" o simplemente TMDB(link de la pagina: https://www.themoviedb.org/?language=es). La aplicación permite filtrar entre películas polulares, en cartelera y proximas a salir. Lastimosamente la API no me permitía acceder a las películas, si no unicamente a información básica de la película, como el titulo, la descripción, la imagen o poster de la película, asi como algunos otros datos poco relevantes. Este proyecto tiene un despliegue en la plataforma de netlify, o en pocas palabras, cuenta con una interfaz grafica. Click en visitar sitio para ver la interfaz o click en respositorio para ver el codigo fuente de la aplicación.`,
        repo: "https://github.com/agudelodiego/My-movie/tree/master",
        vista: "https://diego-gallery.netlify.app"
    },

    BBDDs: {
        titulo: "Implementación de un pool de conexiones en python",
        contenido: `En este proyecto estaba ralizando una implementación del patrón de diseño DAO(Data Acces Object) en una conexión a una base de datos postgreSQL, mediante un pool de conexiones con python. Este proyecto no tiene ínterfaz de usuario, es unicamente codigo. Al darle click al boton de Repositorio veras el codigo fuente del proyecto.`,
        repo: "https://github.com/agudelodiego/Base-Datos",
        vistas: false
    },

    calculadora: {
        titulo: "Calculadora web",
        contenido: `Este fue uno de los primeros proyectos que realicé cuando estaba empezando a aprender a Html, Css y Java Script, sobre todo java script por la parte de la lógica de manipulación del DOM(Document Object Model), por tanto es un proyecto al cual le tengo bastante cariño pese a ser un proyecto relativamente simple.`,
        repo: "https://github.com/agudelodiego/Calculadora",
        vista: "https://agudelodiego.github.io/Calculadora/"
    },

    registradora: {
        titulo: "Caja Registradora python",
        contenido: `Este proyecto realizado con python, corresponde a uno de los primeros proyectos que realicé cuando estaba aprendiendo el lenguaje, y lo realicé con el fin de practicar y hacer un "conexión a un base de datos"(en realidad es una conexión que simulo mendiante arrays). Este proyecto no poseé ínterfaz gráfica.`,
        repo: "https://github.com/agudelodiego/CajaRegistradora_Python",
        vista: false
    },

    portafolio: {
        titulo: "Mi portafolio web",
        contenido: `Este proyecto corresponde al aplicativo web en el cual te encuentras en este momento. Este fue un proyecto para el cual empleé la libreria React Js(https://es.reactjs.org/), la liberia Styled Components(https://styled-components.com/), asi como la libreria React Router V6(https://reactrouter.com/), y de esta manera y utilizando las herramientas que pone a disposición react router a la hora de crear rutas, y del mismo modo aprovechando la sintaxis JSX de react y la potencia que ofrece la libreria Styled Components para maquetar cada uno de los elementos de este sitio.
        Si te gustan los iconos y las imagenes utilizadas en este sitio deberias viitar: "https://www.flaticon.es/resultados?word=html", página de la cual salierón la varias de las imagenes e iconos, tambien visita: "https://fontawesome.com/icons".`,
        repo: "https://github.com/agudelodiego/portafolio",
        vista: " https://agudelodiego.github.io/portafolio/"
    },

    travelApp: {
        titulo : "Aplicacion de viajes",
        contenido: `Este es un proyecto desarrollado con la libreria react js, fue realizado con el objetivo de poner en practica el uso la liberia antes mensionada y styled-components. Cuenta con un despliegue en la plataforma de github pages.`,
        repo: "https://github.com/agudelodiego/travel-app",
        vista: "https://agudelodiego.github.io/travel-app/"
    }
}
// *--------------------------------------------------------------------------
export default Informacion;