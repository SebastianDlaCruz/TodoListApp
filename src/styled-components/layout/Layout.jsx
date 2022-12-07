import styled, { css } from 'styled-components';
import { ButtonTask, StyleTask, backgroundUtility } from '../utils/styles'


export const HeaderStyle = styled.header`
    position: relative;
    inline-size: 100%;
    block-size : 250px;

    div{
        position: absolute;
        inset-block: 20%;
        inset-inline: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;

        @media screen and (min-width: 950px) {
            justify-content: space-evenly;
        }
    }
`;

export const ButtonChangeTheme = styled.button`

    padding: 1em;
    background-image: url(${({ check }) => check ? "/images/icon-moon.svg" : "/images/icon-sun.svg"}) ;
    ${backgroundUtility}

`;

export const MainStyle = styled.main`

    position: relative;
    min-block-size: 100vh;
    background-color: ${({ color, changeTheme }) => changeTheme ? color.white : color.dark};
    transition: background-color var(--transition-theme);
    section{
        position: absolute;
        inset-block-start: -5%;       
        inset-inline: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        inline-size: 100%;
        background-color: transparent;

        ul{
            inline-size: var(--clamp);
            
            & div{

                overflow: scroll;
                max-block-size: 290px;
             }
        }
    }
`;


export const FormStyle = styled.form`

    ${StyleTask}

    div{
        ${ButtonTask}
    }
    
    input{
        inline-size: 90%;
        padding: .4rem;
        background-color: transparent;
        border: none;
        color: ${({ colorTheme, change }) => change ? colorTheme.dark : colorTheme.white};
    }

    input::placeholder{
        color: ${({ colorTheme, change }) => change ? colorTheme.dark : colorTheme.white};
    }
`;

export const TaskStyle = styled.li`

    position: relative;
    ${StyleTask}
    display: ${({ stateTask }) => {

        if (stateTask === 'All') return `flex`;
        if (stateTask === 'Completed') return `none`;
        if (stateTask === 'Active') return `none`;
    }};

    inline-size: 100%;
 

     &::before{
        content:'';
        position: absolute;
        inset-block-end: 0%;
        inset-inline: 0;
        block-size: 1px;
        inline-size: 100%;
        background-color: #fff;
    }   

`;


export const ParagraphStyle = styled.p`

    inline-size: 79%;
    transition: color 1s ease-out;
    color: ${({ check, colorTextParagraph, themeGeneral }) => {

        if (themeGeneral) {

            if (check) {
                return css`
                    hsl(0, 0%, 71%);
                `
            } else {
                return colorTextParagraph.white;
            }

        } else {

            if (check) {
                return colorTextParagraph.white;
            } else {
                return colorTextParagraph.dark;
            }
        }


    }};

    &::before{
        content:'';
        position: absolute;
        block-size: 1pt;
        min-inline-size: ${({ check }) => check ? '70%' : '0'};
        inset-block: 50%;
        background-color: ${({ check, colorTextParagraph }) => check ? colorTextParagraph.white : colorTextParagraph.dark};          
        transition: ${({ check }) => check ? 'min-inline-size  1s ease-out;' : 'none'};
    }
    
`;

export const ButtonCheck = styled.button`     
        ${ButtonTask}
        padding: .8rem;
        background-position: center;
        background-image: ${({ check }) => check ? "url('/images/icon-check.svg'),linear-gradient(130deg, rgba(92,223,255,1) 42%, rgba(245,14,218,0.9570027840237657) 80%)" : 'none'};
        background-repeat: no-repeat;
        background-size: 80% ,cover;
        &:hover{
            background-image: url('/images/icon-check.svg'),
            linear-gradient(130deg, rgba(92,223,255,1) 42%, rgba(245,14,218,0.9570027840237657) 80%); 
        }
`;

export const DeleteTask = styled.button`
    background-image: url('/images/icon-cross.svg');
    padding: .7rem;
    ${backgroundUtility}
`;

export const SectionInfoStyle = styled.li`

    display: flex;
    justify-content: space-between;
    margin-block-start: 1rem;
    padding: 0 1rem;
    border-radius: 3px;
    background-color: ${({ color, themeBackground }) => themeBackground ? color.white : color.dark};
    transition: background-color var(--transition-theme);
    color: var(--color-text);
     span{

        margin:0 .5rem;
    }
    button{
        color: var(--color-text);
    }

`;

export const ContainerButtonStyle = styled.div`

    display: flex;
    justify-content: center;
    gap: 36px; 
    block-size: 39px;
    border-radius: 3px;
    inline-size: clamp(312px,-38%,452px);
    background-color: ${({ check, color }) => check ? color.white : color.dark};
    transform: translateY(0);
    transition: background-color var(--transition-theme),
    transform 1s ease-in-out;
    
    button{
        font-size: 1rem;
        font-family: var(--font-text-secondary);
        color: var(--color-text);
        transition: color 1s ease-out;
        &:hover{
            color: ${({ colorText }) => colorText.hover};
        }
    }

    @media screen and (width > 786px){

        transform: translateY(-163%);
    }
`;

export const MessageStyle = styled.div`

    padding: 3em;
    text-align: center;
    font-size: 1.4rem;
    background-color: ${({ color, themes }) => themes ? color.white : color.dark};
    transition: background-color var( --transition-theme);
    color: ${({ colorText, themes }) => themes ? colorText.white : colorText.dark};
`;


export const ImageMemeStyle = styled.img`

    position: absolute;
    inset-inline-start: 0%;
    transform: ${({ stateMessage }) => stateMessage ? 'translateX(0%)' : 'translateX(-100%)'};  
    transition: transform 1s ease-out; 
`;

export const SubmitStyle = styled.input`

        inline-size: 230px;
        padding: 1rem;
        margin: 1rem auto;
        border-radius: 3px;
        color: #fff;
        border: 2px solid ${({ borderStyle }) => borderStyle.hover};
        background-color: transparent;
        transition: background-color 1s ease;
        
        &:hover{
            background-color:${({ borderStyle }) => borderStyle.hover};
        }
        
`;