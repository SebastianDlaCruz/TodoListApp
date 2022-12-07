import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --clamp: clamp(300px,61%,640px);
        --color-text: hsl(234,11%,52%);
        --transition-theme: 1s ease-out;
        --font-text-primary: 'Josefin Sans', sans-serif;
        --font-text-secondary: 'Prompt', sans-serif;
    }     

    html {
        box-sizing: border-box;
    }

    body {
        padding:0;
        margin: 0;
        box-sizing: inherit;
        min-block-size: 100vh;
        font-family: var(--font-text-primary);        
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    ul,li{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button{

        background: none;
        border: none;
    }
`;