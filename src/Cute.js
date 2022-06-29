import { Navbar, StyledLink} from "./LandingPage.js/NavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {CuteHome } from "./LandingPage.js/home";
import Work from "./LandingPage.js/work";
import Contact from "./LandingPage.js/contact";
import { GlobalStyle } from "./GlobalComponents/GlobalComponents";

import About from "./LandingPage.js/Me";






// Dom routers for the Cute version of the page

const Cutify = ()=> {
  return (
  <>
  <GlobalStyle/>
    <Router basename={process.env.PUBLIC_URL}>
      
      <Navbar sticky="top">
        <StyledLink to ="/CuteHome">/About</StyledLink>
        <StyledLink to ="/work">/Work</StyledLink>
        <StyledLink to ="/Contact">/Contact</StyledLink>
      
      </Navbar>

    <Routes>
      <Route path="*" element={<CuteHome />} />
      <Route path="/Work" element={<Work/>} />
      <Route path="/Contact" element={<Contact />} />
      

    </Routes>
    


  </Router>

  <About />
   
</>
)
};

export default Cutify;