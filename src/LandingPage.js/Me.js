
import  styled  from "styled-components";
import React from "react";
import PicMe from "./PicMe.png";


export const Column = styled.div `
    display:flex;
    padding-top: 500px;
    flex-direction: row;
    flex-wrap: nowrap;
    
    margin: 40 px;
   
`
export const Image = styled.img `
display: flex;
flex-direction: row;
height: 300px;
width: 300px;
border-radius: 50%;


`
export const Container = styled.section `
display: flex;
flex-direction: column;

margin: 40px;

`

export const NewSection = styled.section `
    display:flex;
    flex-direction:row;
    
`

const About = ()=> {
    return(
        <>

        <Container>
        <NewSection>
        <Column>
            
                <Container>
                    <h3>About</h3>
                
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Ut enim ad minim veniam, quis nostrud exerception pariatur, sed diam voluptua et justo dolore magna aliquyam erat. Except id,sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat.  </p>
                </Container>
                <Image src={PicMe} alt="me" />
            </Column>
            
            </NewSection>
           
        </Container>
            
        </>
        
    )
}


export default About;
