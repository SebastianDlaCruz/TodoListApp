import styled from 'styled-components';


export const SectionRegisterStyle = styled.section`

    block-size: 100vh;
    background-color: ${({ theme }) => theme.dark};
    color: #fff;

    header{
        position: relative;
        text-align: center;
        font-size : 2rem;
        block-size: 130px; 
        
        h2{
            line-height: 130px;
            margin: 0;
        }
    }

    a{

        position: absolute;
        inset-block-start: 30%;
        inset-inline-start: 2%;
        font-size: 1.2rem;
        color: #fff;
    }

`;

