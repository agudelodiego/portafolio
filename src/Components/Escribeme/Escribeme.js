import styled,{keyframes} from "styled-components";
import React,{useContext,useState} from "react";
import {Tema} from "../TemaColor/ThemeContext.js";
import Email from "../../Images/email.png"; 



// Importamos los iconos de las redes sociales
import facebook from "../../Icons/facebookLink.png";
import instagram from "../../Icons/instagramLink.png";
import github from "../../Icons/githubLink.png";
import whatsapp from "../../Icons/whatsappLink.png";
import EmailEnviado from "../../Images/emailEnviado.png";
import Cerrar from "../../Icons/borrar.png";
import loading from "../../Images/loading.png";





// Contenedor para el formulario y la imagen
const ContenedroForm = styled.section`
    width: 100%;
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



// Elemento encargado de contener los enlaces a mis redes sociales
const Redes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    flex-direction: column;

    @media screen and (min-width: 900px) {
        top: 200px;
    }
`;
// Elemento encargados de contener cada uno de los enlaces
const Enlace = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: 8px;

`;
// Elementos encargados de contener los iconos de las redes sociales
const Icon = styled.img`
    object-fit: cover;
    width: 30px;
    height: auto;
    cursor: pointer;

    @media screen and (min-width: 900px) {
        width: 45px;
    }
`;




// Mensaje de confirmacion de envio de mensaje
const ConfirmacionCuadro = styled.div`
    width: 220px;
    height: 130px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.tema.primario};
    position: absolute;
    top: -150px;
    border: 1.5px solid ${props=> props.tema.terciario};
    border-radius: 0 0 12px 12px;
    transform: translateY(0px);
    transition: transform 0.5s;

    &.enviado{
        transform: translateY(150px);

        @media screen and (min-width: 900px){
            transform: translateY(220px);
        }
    }
`;
// Imagen de confirmacion de envio de mensaje
const ImgConfirmacion = styled.img`
    object-fit: cover;
    width: 40px;
    height: auto;

    @media screen and (min-width: 900px) {
        width: 50px;
    }
`;
// Texto de confirmacion de envio de mensaje
const TextConfirmacion = styled.p`
    color: ${props => props.tema.terciario};
    text-align: center;
`;
// Icono de cerra
const CerrarIcon = styled.img`
    width: 30px;
    height: auto;
    position: absolute;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
`;


// Animacion de cargando
const LoadingAnimation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;
// Elemento que se encargara de contener la imagen de loading
const Loading = styled.img`
    width: 70px;
    height: auto;
    position: absolute;
    margin: auto;
    visibility: hidden;
    animation: ${LoadingAnimation} 1s ease infinite;
    transition: visibility 0.4s;
    
    &.load{
        visibility: visible;
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
    const [enviado,setEnviado] = useState(false);

    // Usamos el hook de useRef para crear una referencia del icono de cargando
    const [carga, setCarga] = useState("");


    // *--------------------------------------------------------------------------
    // Manjamos el manejo del formulario
    const EnviarFormulario = (evento) =>{
        evento.preventDefault();

        // Funcion asincrona encargada del manejo de las promesas
        let asincrona = async() =>{

            try{

                // Mostramos la animacion de cargando
                setCarga("load");

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
                    setEnviado(true);
                }

                // Reseteamos los estado del formulario
                setNombre("");
                setEmail("");
                setMensaje("");
            }
            catch (err) {
                console.error(err);
            }
            finally{
                // Quitamos la animacion de cargando
                setCarga("");
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
            <Redes>
                <Enlace href="https://www.facebook.com/diegoalexander.agudelogarcia/" target="_blank" >
                    <Icon src={facebook} alt="Enlace a Facebook" />
                </Enlace>
                <Enlace href="https://www.instagram.com/dg.garcia_/" target="_blank" >
                    <Icon src={instagram} alt="Enlace a Instagram" />
                </Enlace>
                <Enlace href="https://github.com/agudelodiego" target="_blank" >
                    <Icon src={github} alt="Enlace a Github" />
                </Enlace>
                <Enlace href="https://chatwith.io/es/s/agudelo-diego" target="_blank" >
                    <Icon src={whatsapp} alt="Enlace a Whatsapp" />
                </Enlace>
            </Redes>
            <ConfirmacionCuadro tema={tema} className={enviado? "enviado":""} >
                <ImgConfirmacion src={EmailEnviado} alt="Imagen de confirmacion de envio del mensaje" />
                <TextConfirmacion tema={tema}>
                    Mensaje enviado exitosamente
                </TextConfirmacion>
                <CerrarIcon src={Cerrar} alt="Icono de cerrar" onClick={()=> setEnviado(false)}/>
            </ConfirmacionCuadro>
            <Loading src={loading} alt="Imagen de cargando" className={carga}/>
        </ContenedroForm>
    );
};
export default Formulario;