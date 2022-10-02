// import logo from './logo.svg';
import React from "react";
import Header from "./Components/Header"
import Feature from "./Components/Feature";
import About from "./Components/About";
import AboutImage from "./images/About.png"
import AboutImage2 from "./images/download.png"
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
        <Header/>
        <Feature/>
        <About
          img={AboutImage}
          title="About Myself"
          button="Click me"
        />
        <Presentation/>
        <About
          img={AboutImage2}
          title="About "
          button="Get the link"
        />
        <Contact/>
    </div>
    
  );
}

export default App;
