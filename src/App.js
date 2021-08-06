import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import styled from '@emotion/styled';
import { useState } from 'react';

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

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca:'',
      year: '',
      plan: ''
    }
  });

  const {datos} = resumen;

  return (
    // Utilizamos los Styled Components Creados
    // Para utilizarlos se agrega el nombre de las variables con la función de "Emotion" como si fueran etiquetas HTML
    // Que el "Styled Component" contenga etiquetas de apertura y cierra va a depender a que etiqueta del DOM estamos haciendo referencia
    // Si hacemos referencia a una etiqueta "body" tendra de apertura y cierre
    // Si hacemos referencia a una etiqueta  "input" solo tendra apertura
    <Contenedor>
        <Header titulo='Cotizador de Seguros'/>
        <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
          />
          <Resumen 
            datos={datos}
          />
        </ContenedorFormulario>
    </Contenedor>

  );
}

export default App;
