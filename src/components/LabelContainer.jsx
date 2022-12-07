import { useState } from 'react';
import { LabelContainerStyle } from '../styled-components';

const LabelContainer = ({ type, htmlFor, textLabel }) => {

    const [transition, setTransition] = useState(false);


    const handleTransition = (event) => {
        if (event.target.value == '') setTransition(true);
    }


    const handleNotTransition = (event) => {

        if (event.target.value == '') setTransition(false);
    }


    return (
        <>
            <LabelContainerStyle
                htmlFor={htmlFor}
                trans={transition}
                padding={'.6rem 1rem'}
                translateInitial='translate(-12%,0%)'
                translateFinal='translate(0%,260%)'
            >{textLabel}</LabelContainerStyle>
            <input type={type}
                onFocus={handleTransition}
                onBlur={handleNotTransition}
                required

            />
        </>
    );
}

export default LabelContainer;
