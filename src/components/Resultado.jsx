import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
/* IMPORTANTE: Ver en "src/index.css"  el formato de prefijos que se utiliza para dar estilos a la transición que ejecuta la libreria*/
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {
    return ( 
        (cotizacion === 0) 
            ? <Mensaje>Elige marca, año  y tipo de seguro</Mensaje> 
            : ( 
                <ResultadoCotizacion>
                    <TransitionGroup
                        component="div"        // Definimos el componente HTML que creará para la Transición
                        className="resultado"  // Se le agrega como clase el prefijo "resultado"
                    >
                        <CSSTransition
                            classNames="resultado"             // Se le agrega como clase el prefijo "resultado"
                            key={cotizacion}                   // Se tiene que enviar una clave unica, en este caso será la "cotizacion"
                            timeout={{enter: 500, exit: 500}}  // Se define el tiempo que durara la animación
                        >
                                <TextoCotizacion>El total es: <span>${cotizacion}</span></TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
               )        
    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;