import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { MainStyle } from '../styled-components';
import Form from './Form';
import ContainerTask from './ContainerTask';
import ContainerButton from './ContainerButton';
import UseStateTask from '../hook/useStateTask';
import { UserContext } from '../context';
import ImageMeme from './ImageMeme';

const BodyApp = () => {

    const theme = useTheme();
    const { themeGeneral } = useContext(UserContext);

    const { task, handleCreateTask,
        handleCheckList,
        handleDelateList,
        handleDelateTaskCompleted,
        handleAllState,
        handleActiveStates,
        handleCompletedStates, stateMessage } = UseStateTask();

    return (

        <MainStyle
            color={theme.backgroundBody}
            changeTheme={themeGeneral}
        >

            <section>

                <Form
                    handleCreateTask={handleCreateTask}
                />

                <ContainerTask task={task}
                    handleCheckList={handleCheckList}
                    handleDelateList={handleDelateList}
                    handleDelateTaskCompleted={handleDelateTaskCompleted}
                    stateMessage={stateMessage}
                />

                <ContainerButton color={theme.background}
                    check={themeGeneral}
                    colorText={theme.colorTextItem}
                    handleAllState={handleAllState}
                    handleActiveStates={handleActiveStates}
                    handleCompletedStates={handleCompletedStates}
                />

            </section>

            <ImageMeme stateMessage={stateMessage} />

        </MainStyle>
    );
}

export default BodyApp;

