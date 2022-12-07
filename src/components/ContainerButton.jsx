import { ContainerButtonStyle } from '../styled-components';

const ContainerButton = ({ color, colorText, check, handleAllState,
    handleActiveStates,
    handleCompletedStates }) => {


    return (

        <ContainerButtonStyle
            color={color}
            check={check}
            colorText={colorText}
        >
            <button onClick={handleAllState}>All</button>
            <button onClick={handleActiveStates}>Active</button>
            <button onClick={handleCompletedStates}>Completed</button>

        </ContainerButtonStyle>
    );
}

export default ContainerButton;
