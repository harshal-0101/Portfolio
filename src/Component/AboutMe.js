import React from 'react'

export default function AboutMe() {
  return (
    <div>
     <div className='container'>
      <h1 className='title-about'><i class="fa-solid fa-arrow-left"></i> About</h1>
        <div className='aboutMe'>
            <div className='image'>
            <div className="empty-div2"></div>
                <img src="https://imgs.search.brave.com/UqIPtFQTN21z71iv43mJL78qBF20hlF1ovB4k3qLq5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE5LzI2LzQ2/LzM2MF9GXzYxOTI2/NDY4MF94MlBCZEdM/RjU0c0ZlN2tUQnRB/dlpuUHlYZ3ZhUncw/WS5qcGc" alt="" />
                <br /><i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="My-intro">
              <h1>I am <span>Harshal Mahajan</span></h1>
              <p>Hello! I'm <b>Harshal Mahajana</b>, a passionate software developer currently pursuing my Bachelor of Computer Applications (BCA) at BMU College. I am dedicated to honing my skills in software development and constantly seeking to expand my knowledge in this ever-evolving field.

              With a strong foundation in programming and problem-solving, I am committed to creating innovative solutions through code. Whether it's developing efficient software, building user-friendly applications, or collaborating on exciting projects, I thrive on challenges and strive to make a meaningful impact through my work.
              
              Feel free to explore my portfolio and connect with me for collaboration or to discuss opportunities.
              
              </p>  
            </div>
        </div>
     </div>
    </div>
  )
}
