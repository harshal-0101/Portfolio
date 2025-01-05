import React from 'react';
import './App.css';
import MainContain from './Component/MainContain';
import AboutMe from './Component/AboutMe';  
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Ourservice from './Component/Ourservice';
import Contact from './Component/Contact';
import AnimatedCursor from "react-animated-cursor"

  function App() {


    return (
      <div className="App">
       <AnimatedCursor/>
        
        <div id='main' className="App-header">
          <div className="emty-div"></div>
          <MainContain/>
        </div>
        <div id='about' className="about-section">
          <AboutMe/>
        </div>
        <div  id='skill' className="skills">
          <Skills/>
        </div>
         <div id='projects' className='Projects'>
            <Projects/>
         </div>
         <div id='service' className='our-service'>
          <Ourservice/>
         </div>
         <div id='Hire' className='ContactMe'>
          <Contact/>
         </div>
      </div>
    );
  }

  export default App;

