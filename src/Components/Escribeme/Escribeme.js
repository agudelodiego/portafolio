import styled from "styled-components";
import React,{useContext,useState} from "react";
import {Tema} from "../TemaColor/ThemeContext.js";
import Email from "../../Images/email.png"; 





// Contenedor para el formulario y la imagen
const ContenedroForm = styled.section`
    width: 100%;
    /* max-height: 100vh; */
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    box-sizing: border-box;
    padding: 70px 30px 70px 30px;

    @media screen and (min-width: 915px) {
        flex-direction: row;
    }


`;




// Elemento encargado de contener la imagen
const EmailIMG = styled.img`
    object-fit: cover;
    width: 100px;
    height: 100px;    

    @media screen and (min-width: 915px) {
        width: 200px;
        height: 200px;
        margin-right: 30px;
    }
    @media screen and (min-width: 1200px) {
        width: 250px;
        height: 250px;
        margin-right: 35px;
    }
`;



// Elemento formulario estilizado
const FormularioSTY = styled.form`
    width: 220px;
    height: auto;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;

    /* Algunos estilos para el scroll */
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.tema.terciario};
        border-radius: 5px;
    }

    @media screen and (min-width: 350px) {
        width: 240px;
    }
    @media screen and (min-width: 850px) {
        width: 300px;
    }
    @media screen and (min-width: 1200px) {
        width: 400px;
    }
`;



// Elementos labels estilizados
const Labels = styled.label`
    color: ${props => props.tema.terciario};
    
`;
// Elementos inputs estilizados
const Inputs = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${props=>props.tema.terciario};
    border-radius: 10px;
    background-color: ${props => props.tema.primario};
    cursor : pointer;
    padding: 0 20px;
    margin-bottom: 20px;
    outline: none;
    box-sizing: border-box;
    color: ${props => props.tema.terciario};
`;




// Elemento mensaje estilizado
const Mensaje = styled.textarea`
    width: 100%;
    height: 100px;
    border: 1px solid ${props=>props.tema.terciario};
    border-radius: 10px;
    background-color: ${props => props.tema.primario};
    cursor : pointer;
    padding: 10px 20px;
    outline: none;
    margin-bottom: 10px;
    box-sizing: border-box;
    color: ${props => props.tema.terciario};
    resize: none;

    /* Algunos estilos para el scroll */
    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.tema.terciario};
        border-radius: 3px;
    }
`;






// Funcion encargada de renderizar el formulario
const Formulario = () =>{

    // Accedemos al tema de color
    const {tema} = useContext(Tema);

    // Estados del formulario
    const[nombre, setNombre] = useState("");
    const[email,setEmail] = useState("");
    const[mensaje,setMensaje] = useState("");


    // *--------------------------------------------------------------------------
    // Manjamos el manejo del formulario
    const EnviarFormulario = (evento) =>{
        evento.preventDefault();

        // Funcion asincrona encargada del manejo de las promesas
        let asincrona = async() =>{

            try{
                // Enviamos los datos al servidor
                let postData = await fetch("https://formsubmit.co/ajax/agudelodiego22@gmail.com", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: `${nombre}`,
                        email: `${email}`,
                        mensaje: `${mensaje}`
                    })
                });

                // Obtenemos la información que responda el servidor 
                let respuesta = await postData.json();

                // Almacenamos la respuesta del servidor
                let resultado = respuesta.success;

                // Validamos la respuesta del servidor
                if(resultado === "true"){
                    console.log("El envio se proceso correctamente");
                }

                // Reseteamos los estado del formulario
                setNombre("");
                setEmail("");
                setMensaje("");
            }
            catch (err) {
                console.error(err);
            }
            

        }
        asincrona();

    }
    // *--------------------------------------------------------------------------

    // Manejamos lo que escriba el usuario en los diferentes inputs
    const changeNombre = (evento) =>{
        setNombre(evento.target.value);
    }
    const changeEmail = (evento) =>{
        setEmail(evento.target.value);
    }
    const changeMensaje = (evento) =>{
        setMensaje(evento.target.value);
    }

    return(
        <ContenedroForm tema={tema}>
            <EmailIMG src={Email} alt="Imagen de email" />
            <FormularioSTY onSubmit={EnviarFormulario} tema={tema} >
                <Labels htmlFor="nombre" tema={tema}>Nombre:</Labels>
                <Inputs name="nombre" id="nombre" tema={tema} type="text" value={nombre} onChange={changeNombre} required />
                <Labels htmlFor="email" tema={tema}>Correo electronico:</Labels>
                <Inputs name="email" id="email" tema={tema} type="email" value={email} onChange={changeEmail} required />
                <Labels htmlFor="mensaje" tema={tema}>Deja tu mensaje aca:</Labels>
                <Mensaje name="mensaje" id="mensaje" tema={tema} type="text" value={mensaje} onChange={changeMensaje} required />
                <Inputs name="enviar" id="enviar" tema={tema} type="submit" value="Enviar" />
            </FormularioSTY>
        </ContenedroForm>
    );
};
export default Formulario;