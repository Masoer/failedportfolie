import ProjectShop from "./ProjectShop.png";
import styled from "styled-components";

export const WebshopImage = styled.img`
  width: auto;
  height: 300px;
`;

export const MainDiv = styled.div`
  width: 90vw;
  height: 100vh;
`;

const Work = () => {
  return (
    <MainDiv>
      <h1>Projects</h1>
      <br></br>
      <h2>Web shop</h2>
      <a
        href="https://masoer.github.io/summertask/"
        target="_blank"
        rel="noreferrer"
      >
        <WebshopImage src={ProjectShop} alt="webshop" type="button" />
      </a>
    </MainDiv>
  );
};

export default Work;
