import React from 'react'
import ProfileIMG from './img/profilePhoto.jpg'

export default function AboutMe() {
  const handleDownload = () => {
    const cvUrl = '/path/to/your/cv.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'My_CV.pdf';  
    link.click();
  };
  return (
    <div>
     <div  className='container'>
      <h1 className='title-about'><i class="fa-solid fa-arrow-left"></i> About</h1>
        <div className='aboutMe'>
            <div className='image'>
            <div className="empty-div2"></div>
                <img src={ProfileIMG} alt="" />
                <br /><i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="My-intro">
              <h1>I am <span>Harshal Mahajan</span></h1>
              <p>Hello! I'm <b>Harshal Mahajana</b>, a passionate software developer currently pursuing my Bachelor of Computer Applications (BCA) at BMU College. I am dedicated to honing my skills in software development and constantly seeking to expand my knowledge in this ever-evolving field.

              With a strong foundation in programming and problem-solving, I am committed to creating innovative solutions through code. Whether it's developing efficient software, building user-friendly applications, or collaborating on exciting projects, I thrive on challenges and strive to make a meaningful impact through my work.
              
              Feel free to explore my portfolio and connect with me for collaboration or to discuss opportunities.
              <br /> <button className="download-btn" onClick={handleDownload}>
      My CV <i class="fa-solid fa-cloud-arrow-down"></i>
    </button> </p>  
            </div>
        </div>
     </div>
    </div>
  )
}
