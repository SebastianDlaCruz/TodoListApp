import { useContext } from 'react';
import { FormStyle } from '../styled-components';
import { useTheme } from 'styled-components';
import { UserContext } from '../context';

const Form = ({ handleCreateTask }) => {

    const theme = useTheme();
    const { themeGeneral } = useContext(UserContext);

    return (
        <FormStyle
            onSubmit={handleCreateTask}
            color={theme.background}
            colorTheme={theme.colorTheme}
            changeTheme={themeGeneral}
            change={themeGeneral}
            colorBorder={theme.colorTextItem}
        >

            <div></div>

            <input type="text"
                placeholder='Create a new todo...'
            />
        </FormStyle>

    );
}

export default Form;
