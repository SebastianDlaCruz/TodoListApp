import styled from 'styled-components';

export const LabelContainerStyle = styled.label`

        align-self: flex-start;
        margin-left: 1.5rem;
        transform: ${({ trans, translateInitial, translateFinal }) =>
        (trans)
            ? translateInitial
            : translateFinal
    };
        color: var(--color-blanco);
        z-index: 2;
        transition: transform .6s ease-out;
        
        & + input{
            border: 1px solid #fff;
            border-radius: 3px;
            padding: ${({ padding }) => padding};
            background-color: transparent ;
            color: #fff;
    }

`