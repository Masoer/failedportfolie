import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import About from "./Me";

// Aligns the text of both version of the page

export const HomeAlign = styled.div`
  text-align: center;
  color: white;
`;

// Css for the Rock version of the page

export const RockStyle = styled.h1`
  color: #5b0f4c;
  padding-top: 100px;
  -webkit-text-stroke: 0.8px #9c404b;
  font-weight: bold;
`;

// CSS for the Cute version of the page

export const HomeStyle = styled.h1`
  color: pink;
  padding-top: 100px;
  -webkit-text-stroke: 1px #9c404b;
  font-weight: bold;
`;

// Hello! animation for Rock style
const RockHome = function ChainExample() {
  const styles = useSpring({
    loop: true,
    to: [{ opacity: 1 }, { opacity: 0 }],
    from: { opacity: 0 },
  });

  return (
    <>
      <HomeAlign>
        <animated.div style={styles}>
          {" "}
          <RockStyle>Hello!</RockStyle>{" "}
        </animated.div>
        <RockStyle> My name is Margrethe Sofie Erstad.</RockStyle>
        <h2>I am a frontend developer based in Norway.</h2>
      </HomeAlign>
      <About />
    </>
  );
};

// Hello! animation for Cute style
const CuteHome = function ChainExample() {
  const styles = useSpring({
    loop: true,
    to: [{ opacity: 1 }, { opacity: 0 }],
    from: { opacity: 0 },
  });

  return (
    <>
      <HomeAlign>
        <animated.div style={styles}>
          {" "}
          <HomeStyle>Hello!</HomeStyle>{" "}
        </animated.div>
        <HomeStyle> My name is Margrethe Sofie Erstad.</HomeStyle>
        <h2>I am a frontend developer based in Norway.</h2>
      </HomeAlign>
      <About />
    </>
  );
};

export { RockHome, CuteHome };
