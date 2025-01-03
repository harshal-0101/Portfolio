import React, { useState } from 'react';

export default function Projects() {
  // State to track which button is clicked and the current image index
  const [clickedButton, setClickedButton] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images for different categories
  const images = {
    1: [
      'https://via.placeholder.com/800x400?text=Image+1',
      'https://via.placeholder.com/800x400?text=Image+2',
      'https://imgs.search.brave.com/-PXFoEjc4e3-PFfUjoiM5dYo__7bPF8dtv4cEu4VTRs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn',
      'https://via.placeholder.com/800x400?text=Image+4'
    ],
    2: [
      'https://via.placeholder.com/800x400?text=Image+1',
      'https://via.placeholder.com/800x400?text=Image+2',
      'https://via.placeholder.com/800x400?text=Image+3',
      'https://via.placeholder.com/800x400?text=Image+4'
    ],
    3: [
      'https://via.placeholder.com/800x400?text=Image+1',
      'https://via.placeholder.com/800x400?text=Image+2',
      'https://imgs.search.brave.com/-PXFoEjc4e3-PFfUjoiM5dYo__7bPF8dtv4cEu4VTRs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn',
      'https://via.placeholder.com/800x400?text=Image+4'
    ]
  };

  // Function to change the visible category
  const showDiv1 = () => setClickedButton(1);
  const showDiv2 = () => setClickedButton(2);
  const showDiv3 = () => setClickedButton(3);

  // Get the images based on the clicked button
  const currentImages = images[clickedButton];

  // Next and Previous slide logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div>
      <div id='projects' className="Project-container">
        <div className="my-work">
          <h1 className='MyWorkHading'>
            <i className="fa-solid fa-arrow-left"></i> My Work
          </h1>
          <div className="Category">
            <button onClick={showDiv1}><i class="fa-solid fa-globe"></i> Website</button>
            <button onClick={showDiv2}><i class="fa-brands fa-android"></i> Android Application</button>
            <button onClick={showDiv3}><i class="fa-solid fa-pen-nib"></i> Design</button>
          </div>

          <div className="slider-container">
            <button className="arrow left-arrow" onClick={prevSlide}>←</button>
            <div className="slider">
            <div className="empty-div2"></div>
              <img src={currentImages[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button className="arrow right-arrow" onClick={nextSlide}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
