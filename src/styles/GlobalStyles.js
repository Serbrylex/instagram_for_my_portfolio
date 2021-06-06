import { createGlobalStyle } from 'styled-components'

/*
Dark
    0A0A0A
    141414
    1F1F1F 
    292929
    333333
    3D3D3D
    474747
    525252
*/

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        margin: 0;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    ul, li, h1, h2, h3, p, button {
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
    }
    button {
        background: transparent;
        border: 0;
        outline: none;
    }
    body {
        background-color: #fafafa;
        height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        width: 100%;        
        font-size: 14px;        
        @media (min-width: 500px){
            max-width: none;
            width: 100%;
            margin: 0;
        }
    }
    #root {
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);        
        min-height: 100%;        
        @media (min-width: 500px){
            width: 100%;
        }
    }
`
