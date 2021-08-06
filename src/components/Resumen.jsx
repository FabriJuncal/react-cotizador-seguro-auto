import React from 'react'

const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return ( 
        <>
            <h2>Resumen de Cotización</h2> 
            <ul>
                <li>Marca:</li>
                <li>Plan:</li>
                <li>Año:</li>
            </ul>
        </>
    );
}
 
export default Resumen;