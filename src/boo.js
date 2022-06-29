import { useState } from "react";
import Cutify from "./Cute";
import Rock from "./Rock";
import  styled  from "styled-components";




// for some reason the button refuses to do what I want it to do.
export const StyledButton = styled.button `
    color: white;
    -webkit-text-stroke: 0.5px #9c404b;
    background: none;
    font-weight: bold;
    height: 40px;
    width: auto;
    position: sticky;
    top: 0;
    

`

// the Boolian change between the two color version of the portfolio.


const ChangeStyle = () =>{
    const [boolian, setBoolean] = useState(true);

    const ToogleBoolian = () => {
        setBoolean(!boolian)
    }

    
    return (
        <>
        <article>
            <div style={{ display: "flex", background: "none" }}>
                <p> {boolian ? <Cutify /> : <Rock />} </p>
                <StyledButton onClick={ToogleBoolian}>
                    Change style
                </StyledButton>
            </div>
        
        </article>
        </>
        
    )
};


export default ChangeStyle;
