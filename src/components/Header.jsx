import styled from '@emotion/styled'

// Importamos la libreria "Styled Components"
// Se utiliza para mesclar Js con Css
// Lo que se hace es declarar a una variable una funcíon con las deficiniones Css en un Template String
// Y luego utilizar los nombres de las variables en forma de etiquetas HTML

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => ( 
    // Utilizamos los Styled Components Creados
    // Para utilizarlos se agrega el nombre de las variables con la función de "Emotion" como si fueran etiquetas HTML
    // Que el "Styled Component" contenga etiquetas de apertura y cierra va a depender a que etiqueta del DOM estamos haciendo referencia
    // Si hacemos referencia a una etiqueta "body" tendra de apertura y cierre
    // Si hacemos referencia a una etiqueta  "img" solo tendra apertura
    <ContenedorHeader> 
        <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader> 

);

export default Header;