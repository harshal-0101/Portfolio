import React, { useState, useEffect } from 'react';

export default function Skills() {
  const skillsData = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'C', level: 95 },
    { name: 'C#', level: 70 },
    { name: 'Java', level: 90 },
    { name: 'Python', level: 90 },
    { name: 'PHP', level: 95 },
    { name: 'React JS', level: 90 },
    { name: 'XML', level: 90 },
  ];

  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const [progressData, setProgressData] = useState(
    skillsData.map((skill) => ({ ...skill, currentLevel: 0 })) // Initialize with 0
  );

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      const position = skillsSection.getBoundingClientRect();
      if (position.top <= window.innerHeight && position.bottom >= 0) {
        setHasScrolledIntoView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update the progress data when the section comes into view
  useEffect(() => {
    if (hasScrolledIntoView) {
      const interval = setInterval(() => {
        setProgressData((prevData) =>
          prevData.map((skill) => {
            if (skill.currentLevel < skill.level) {
              return { ...skill, currentLevel: skill.currentLevel + 1 }; // Increment progress
            }
            return skill;
          })
        );
      }, 30); // Adjust the interval time for the speed of the animation

      return () => clearInterval(interval);
    }
  }, [hasScrolledIntoView]);

  return (
    <div>
      <div className="skill-container">
        <h1 className='skillsTitle'>Skills <i className="fa-solid fa-arrow-left"></i></h1>
        <div className="skills-sec">
          <div className="allskills">
            <section id="skills" className="skills">
              <h2>My Skills</h2>
              <div className="skills-container">
                {progressData.map((skill, index) => (
                  <div key={index} className="skill">
                    <span className="skill-name">{skill.name}</span>
                    <div className="progress-bar">
                      <div
                        className={`progress ${hasScrolledIntoView ? 'animate' : ''}`}
                        style={{ width: `${skill.currentLevel}%` }}
                      />
                    </div>
                    <span className="skill-percent">{skill.currentLevel}%</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
