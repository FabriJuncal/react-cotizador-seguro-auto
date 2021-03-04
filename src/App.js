import Header from "./components/Header";
import Formulario from "./components/Formulario";

import styled from '@emotion/styled'

// Importamos la libreria "Styled Components"
// Se utiliza para mesclar Js con Css
// Lo que se hace es declarar a una variable una funcíon con las deficiniones Css en un Template String
// Y luego utilizar los nombres de las variables en forma de etiquetas HTML

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  return (
    // Utilizamos los Styled Components Creados
    // Para utilizarlos se agrega el nombre de las variables con la función de "Emotion" como si fueran etiquetas HTML
    // Que el "Styled Component" contenga etiquetas de apertura y cierra va a depender a que etiqueta del DOM estamos haciendo referencia
    // Si hacemos referencia a una etiqueta "body" tendra de apertura y cierre
    // Si hacemos referencia a una etiqueta  "img" solo tendra apertura
    <Contenedor>
        <Header titulo='Cotizador de Seguros'/>
        <ContenedorFormulario>
          <Formulario/>
        </ContenedorFormulario>
    </Contenedor>

  );
}

export default App;
