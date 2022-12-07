import { useContext } from 'react';
import { TaskStyle, ButtonCheck, DeleteTask, ParagraphStyle } from '../styled-components';
import { useTheme } from 'styled-components';
import { UserContext } from '../context';

const Task = ({ check, paragraph,
    handleCheckList, handleDelateList,
    stateTask, colorTextParagraph }) => {

    const theme = useTheme();
    const { themeGeneral } = useContext(UserContext);

    return (
        <TaskStyle
            stateTask={stateTask}
            color={theme.background}
            check={check}
            changeTheme={themeGeneral}
        >
            <ButtonCheck
                check={check}
                onClick={handleCheckList}
                themeGeneral={themeGeneral}
                change={themeGeneral}
                colorBorder={theme.colorTextItem}
            />

            <ParagraphStyle
                check={check}
                colorTextParagraph={colorTextParagraph}
                themeGeneral={themeGeneral}
            >
                {paragraph}
            </ParagraphStyle>

            <DeleteTask
                onClick={handleDelateList}
            />

        </TaskStyle >
    );
}

export default Task;
