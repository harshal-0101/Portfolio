import React from 'react';
import './App.css';
import MainContain from './Component/MainContain';
import AboutMe from './Component/AboutMe';  
import Skills from './Component/Skills';
import Projects from './Component/Projects';

  function App() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="emty-div"></div>
          <MainContain/>
        </div>
        <div className="about-section">
          <AboutMe/>
        </div>
        <div className="skills">
          <Skills/>
        </div>
         <div className='Projects'>
            <Projects/>
         </div>
      </div>
    );
  }

  export default App;
