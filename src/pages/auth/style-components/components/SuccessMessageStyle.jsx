import styled from 'styled-components';

export const SuccessMessageStyle = styled.div`

        position:absolute;
        inset-block: 38%;
        inset-inline: 0;
        block-size: 23px;
        padding: 3rem;
        font-size: 2rem;
        line-height: 3px;
        text-align: center;
        z-index: 3;
        background-color: #009400;
        opacity: ${({ valid }) => valid ? 1 : 0};
        visibility: ${({ valid }) => valid ? 'visible' : 'hidden'};
        transition: opacity 1s ease-in-out;

 `;