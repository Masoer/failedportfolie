import  styled  from "styled-components";
import {Link} from "react-router-dom"

// Navbar for the cute version of the page

export const Navbar = styled.ul `
    display:flex;
    justify-content: space-around;
    border: 1px solid #9c404b;
    border-radius: 5px;
    background: pink;
    font-family: helvetica, arial, sans-serif;
    padding: 10px;
    margin: 0 auto;
    max-width: 1000px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(9,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 1;

`


// Navbar for the Rock version of the page

export const NavRock = styled.ul `
    display:flex;
    justify-content: space-around;
    border: 1px solid #9c404b;
    border-radius: 5px;
    background: #5B0F4C;
    font-family: helvetica, arial, sans-serif;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1;
    
`


// Colour of the navbar text/link. For now defaulted with the same colour. 

export const StyledLink = styled(Link)`
    color: white;
    -webkit-text-stroke: 0.5px #9c404b;
    text-decoration: none;
    background: none;
    list-style: none;
    font-weight: bold;

`