import { useContext } from 'react';
import { useTheme } from 'styled-components';
import Task from './Task';
import SectionInfo from './SectionInfo';
import Message from './Message';
import { UserContext } from '../context';
const ContainerTask = ({ task, handleCheckList, handleDelateList, handleDelateTaskCompleted, stateMessage }) => {

    const theme = useTheme();
    const { themeGeneral } = useContext(UserContext);
    return (

        <ul>

            <div>

                {

                    task.length === 0
                        ? <Message
                            color={theme.background}
                            colorText={theme.colorTextItem}
                            value={stateMessage}
                        />

                        : task.map((element, index) => <Task
                            key={index}
                            check={element.check}
                            themeText={theme.colorTextItem}
                            paragraph={element.paragraph}
                            handleCheckList={() => handleCheckList(element)}
                            handleDelateList={() => handleDelateList(element)}
                            stateTask={element.stateTask}
                            colorTextParagraph={theme.colorTextItem}

                        />)
                }
            </div>

            <SectionInfo
                themeBackground={themeGeneral}
                color={theme.background}
                colorText={theme.colorTextItem}
                handleDelateTaskCompleted={handleDelateTaskCompleted} />


        </ul>
    );
}

export default ContainerTask;
