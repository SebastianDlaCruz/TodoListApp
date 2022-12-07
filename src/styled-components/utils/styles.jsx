import { css } from 'styled-components';

export const backgroundUtility = css`
    background-repeat: no-repeat;
    background-size: 96%;
    background-position: center;
`

export const StyleTask = css`
    display:${({ display }) => display ? 'none' : 'flex'};
    align-items: center;
    justify-content:space-between;
    inline-size: var(--clamp);
    padding: 0 1rem;
    block-size : 45px;
    border-radius: 2px;
    gap: 0px;
    background-color: ${({ color, changeTheme }) => changeTheme ? color.white : color.dark};
    transition: background-color var(--transition-theme);
`;

export const ButtonTask = css`
    padding: .8em;
    border: 1px solid  ${({ change, colorBorder }) => change ? colorBorder.white : colorBorder.dark};
    border-radius: 50%; 
`;

