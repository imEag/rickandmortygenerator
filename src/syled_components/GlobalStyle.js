import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: 'Raleway', sans-serif;
        background-color: ${(props) => props.primary};
        font-size: 2rem;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-size: 2rem;
    }
`;