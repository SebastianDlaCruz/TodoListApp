import React from 'react';
import { SuccessMessageStyle } from '../style-components';
const SuccessMessage = ({ valid }) => {
    return (
        <SuccessMessageStyle valid={valid}>

            {valid
                ? <span>Felicidades cuenta registrada con éxito</span>
                : <span>Erro no se puede registrar el usuario por favor,  revise que las contraseñas sean iguales </span>
            }

        </SuccessMessageStyle>
    );
}

export default SuccessMessage;
