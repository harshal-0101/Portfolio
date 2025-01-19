import React,{ useState } from 'react';
import './allComponet.css';
import {useTypewriter, Cursor} from "react-simple-typewriter"
import { Link } from 'react-scroll';

export default function MainContain() {
  const [isOpen, setIsOpen] = useState(false);

  const [typeEffect]=useTypewriter({
    words:["website developer. ","Android app developer."],
    loop:{},
     typeEffect:100,
     deleteSpeed:40
  })
    
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
    

  return (  
    <div>
      <div className="navbar">
              <div className="dropdown">
              <h1 className='webhead'>i'm <span>H</span>arshal</h1>
                 <i onClick={toggleNavbar} className="fa-solid fa-caret-down"></i>
              </div>
            <div className="nav" >
              <ul>
                <li> <Link to="main" smooth={true} duration={500}><i className="fa-solid fa-house"></i> Home</Link></li>
                <li> <Link to="about" smooth={true} duration={500}><i className="fa-regular fa-address-card"></i> About Me</Link></li>
                <li> <Link to="projects" smooth={true} duration={500}><i className="fa-solid fa-code"></i> My Work</Link></li>
                <li> <Link to="skills" smooth={true} duration={500}><i class="fa-solid fa-pen-nib"></i> Skills</Link></li>
                <li><Link to='service'><i className="fa-solid fa-briefcase"></i> Service</Link></li>
                <li><Link to='Hire'><i className="fa-solid fa-handshake"></i> Hire Me</Link></li>
              </ul>
            </div>
 {/* ---------------slidenav------------------ */}
            <div className="Slide-navbar" >
              <ul className={`sliednav ${isOpen ? 'open' : ''}`} >
               <p>I am Harshal</p>
               <li> <Link to="main" smooth={true} duration={500}><i className="fa-solid fa-house"></i> Home</Link></li>
                <li> <Link to="about" smooth={true} duration={500}><i className="fa-regular fa-address-card"></i> About Me</Link></li>
                <li> <Link to="projects" smooth={true} duration={500}><i className="fa-solid fa-code"></i> My Work</Link></li>
                <li> <Link to="skills" smooth={true} duration={500}><i class="fa-solid fa-pen-nib"></i> Skills</Link></li>
                <li><Link to='service'><i className="fa-solid fa-briefcase"></i> Service</Link></li>
                <li><Link to='Hire'><i className="fa-solid fa-handshake"></i> Hire Me</Link></li>
              </ul>
            </div>
      </div>
          <div  className="container-2">
            <div className="mainContain">
              <div className="heading">
                <div className="empty-div2"></div>
                <h1>HELLO! WElCOME</h1>
                <h2>TO MY PORTFOLIO</h2>
                <p className='text-anim'>
                 I am <span>{typeEffect}</span>|
                </p>
              </div>
              <div className="social-media">
                <div className="social-icons">
                <ul> 
                  <li><a href="https://github.com/harshal-0101"><i className="fa-brands fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/harshal-n-mahajan/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BJrrBYNAnROiNVIbV7VuUYQ%3D%3D"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="https://www.instagram.com/its_coder_04/"><i className="fa-brands fa-square-instagram"></i></a></li>
                  <li><a href="www.youtube.com/@mr_harshal_04"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
                </div>    
              </div>
            </div>
          </div>
    </div>
  )
}
