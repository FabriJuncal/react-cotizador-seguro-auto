import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {primerMayuscula} from '../helper';


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos, cotizacion}) => {

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return ( 
        <TransitionGroup 
            component="div"       // Definimos el componente HTML que creará para la Transición
            className="resumen"
        >
            <CSSTransition
                classNames="resumen" // Se le agrega como clase el prefijo "resultado"
                key={cotizacion}     // Se tiene que enviar una clave unica, en este caso será la "cotizacion"
                timeout={500}        // Se define el tiempo que durara la animación
            > 
                <ContenedorResumen>
                    <h2>Resumen de Cotización</h2>   
                    <ul>
                        <li>Marca: {primerMayuscula(marca)}</li>
                        <li>Plan:  {primerMayuscula(plan)}</li>
                        <li>Año del Auto: {primerMayuscula(year)}</li>
                    </ul>
                </ContenedorResumen>
            </CSSTransition>
        </TransitionGroup>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired,
    cotizacion: PropTypes.number.isRequired
}

export default Resumen;