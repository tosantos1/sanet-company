import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FAF8FE;

        --purple: #280063;
        --purple-dark: #240059;
        --purple-light: #442279;

        --yellow: #FFCF15;
        --yellow-dark: #C2A60A;
        --yellow-light: #FFD731;

        --gray: #89898B;
        --gray-dark: #474749;
        --gray-light: #CBCBCC;
        
        --black: #1B0043;
        --black-light: #210052;
        --black-dark: #100025;   
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        // 1REM = 16px

        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Sora', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Sora', sans-serif;
        font-weight: 600;
    }
    p {
        font-family: 'Source Sans Pro', sans-serif;
    }
    button {
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--purple-light);
        padding: 0rem;
        position: relative;
        border-radius: 0.25rem;
        margin: -20rem 5rem 0;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
    }
    
`