import styled from '@emotion/styled';

// Importamos la libreria "Styled Components"
// Se utiliza para mesclar Js con Css
// Lo que se hace es declarar a una variable una funcíon con las deficiniones Css en un Template String
// Y luego utilizar los nombres de las variables en forma de etiquetas HTML

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    /*Esta propiedad quita el estilo nativo que le agrega el navegador al componente y de este modo podemos agregarle estilos personalizados*/
    -webkit-appearance: none; 
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Formulario = () => {
    return ( 
// Utilizamos los Styled Components Creados
// Para utilizarlos se agrega el nombre de las variables con la función de "Emotion" como si fueran etiquetas HTML
// Que el "Styled Component" contenga etiquetas de apertura y cierra va a depender a que etiqueta del DOM estamos haciendo referencia
// Si hacemos referencia a una etiqueta "body" tendra de apertura y cierre
// Si hacemos referencia a una etiqueta  "input" solo tendra apertura

        <form>
            <Campo>
                <Label>Marca</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano-</option>
                    <option value="europeo">Europeo-</option>
                    <option value="asiatico">Asiatico-</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                /> Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                /> Completo
            </Campo>

            <button type="button">Cotizar</button>

        </form>
     );
}
 
export default Formulario;