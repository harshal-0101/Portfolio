import React,{ useState } from 'react';
import './allComponet.css';
import {useTypewriter, Cursor} from "react-simple-typewriter"

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
                 <i onClick={toggleNavbar} className="fa-solid fa-caret-down"></i>
              </div>
            <div className="nav" >
              <ul>
                
                <li><a href=""><i className="fa-solid fa-house"></i> Home</a></li>
                <li><a href=""><i className="fa-regular fa-address-card"></i> About</a></li>
                <li><a href=""><i className="fa-solid fa-code"></i> My Work</a></li>
                <li><a href=""><i className="fa-solid fa-briefcase"></i> Service</a></li>
                <li><a href=""><i className="fa-solid fa-handshake"></i> Hire Me</a></li>
              </ul>
            </div>
 {/* ---------------slidenav------------------ */}
            <div className="Slide-navbar" >
              <ul className={`sliednav ${isOpen ? 'open' : ''}`} >
               <p>I am Harshal</p>
                <li><a href=""><i className="fa-solid fa-house"></i> Home</a></li>
                <li><a href=""><i className="fa-regular fa-address-card"></i> About</a></li>
                <li><a href=""><i className="fa-solid fa-code"></i> My Work</a></li>
                <li><a href=""><i className="fa-solid fa-briefcase"></i> Service</a></li>
                <li><a href=""><i className="fa-solid fa-handshake"></i> Hire Me</a></li>
              </ul>
            </div>
          </div>
          <div className="container-2">
            <div className="mainContain">
              <div className="heading">
                <div className="empty-div2"></div>
                <h1>Hello! WelCome</h1>
                <h2>to my portfolio</h2>
                <p className='text-anim'>
                 I am <span>{typeEffect}</span>|
                </p>
              </div>
              <div className="social-media">
                <div className="social-icons">
                <ul>
                  <li><i className="fa-brands fa-github"></i></li>
                  <li><i className="fa-brands fa-linkedin"></i></li>
                  <li><i className="fa-brands fa-square-instagram"></i></li>
                  <li><i className="fa-brands fa-youtube"></i></li>
                </ul>
                </div>    
              </div>
            </div>
          </div>
    </div>
  )
}
