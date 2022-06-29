import {NavRock, StyledLink} from "./LandingPage.js/NavBar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RockHome } from "./LandingPage.js/home";
import Work from "./LandingPage.js/work";
import Contact from "./LandingPage.js/contact";
import {RockGLobalSTyle } from "./GlobalComponents/GlobalComponents";
import About from "./LandingPage.js/Me";


// Dom routers for the dark version of the page, also called Rock

const Rock = ()=> {
  return (
  <>
  <RockGLobalSTyle/>
    <Router basename={process.env.PUBLIC_URL}>
      <NavRock>
  
        <StyledLink to ="/RockHome">/About</StyledLink>
        <StyledLink to ="/work">/Work</StyledLink>
        <StyledLink to ="/Contact">/Contact</StyledLink>
      
      </NavRock>

    <Routes>
      <Route path="*" element={<RockHome />} />
      <Route path="/Work" element={<Work/>} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>
    


  </Router>

  <About/>
</>
)
};

export default Rock;