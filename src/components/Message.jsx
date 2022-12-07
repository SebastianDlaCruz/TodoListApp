import { useContext } from 'react';
import { MessageStyle } from '../styled-components';
import { UserContext } from '../context';

const Message = ({ color, colorText, value }) => {

    const { themeGeneral } = useContext(UserContext);

    return (

        <MessageStyle color={color} colorText={colorText} themes={themeGeneral}>

            {value ?
                <span>Menos de 36 caracteres por favor. Es una lista  de tareas, no la historia de tu vida </span>
                : <span>Sin Tareas</span>}


        </MessageStyle>
    );
}

export default Message;
