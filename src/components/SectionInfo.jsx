import { useContext } from 'react';
import { SectionInfoStyle } from '../styled-components';
import { UserContext } from '../context';

const SectionInfo = ({ color, colorText, handleDelateTaskCompleted, themeBackground }) => {

    const { counterTask } = useContext(UserContext);

    return (
        <SectionInfoStyle
            color={color}
            colorText={colorText}
            themeBackground={themeBackground}>
            <p>
                <span>{counterTask}</span>
                Items Left
            </p>

            <button
                onClick={handleDelateTaskCompleted}
            >
                Clear Completed
            </button>

        </SectionInfoStyle>
    );
}

export default SectionInfo;
