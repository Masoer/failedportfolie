import { createGlobalStyle } from "styled-components";

//Global style for the cute version of the page

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
        font-family: 'Courier New', Courier;
        color: white;
        
        
    };
    body {
        background-image: linear-gradient(to right, #957DAD, #E0BBE4);
    }
    h3 {
        color: pink;
        -webkit-text-stroke: 1px #9c404b;
        font-weight: bold;
        font-size: 1.5rem;
    }
`;


// Global style for the Rock version of the page

const RockGLobalSTyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
        font-family: 'Courier New', Courier;
        color: white;
        
    };
    body {
        background-image: linear-gradient(to right, black, #010000, #24101a, #34001a);
    }
    h3 {
        color: #5B0F4C;
        -webkit-text-stroke: 0.8px #9c404b;
        font-weight: bold;
        font-size: 1.5rem;
    }
`;



export {RockGLobalSTyle, GlobalStyle};