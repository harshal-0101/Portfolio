import React from 'react'
import EmailSender from './EmailSender'
import './allComponet.css'

export default function Contact() {
  return (
    <div>
      <div id='Hire' className="contact-container">
        <div className="contact">
            <h1>Contact Me</h1>
            <p>Feel free to reach out with any questions or inquiries! Use the form below to send me a message, and I'll get back to you as soon as possible. Whether it's about a project, collaboration, or any other query, I’m always happy to connect!</p>
            <EmailSender/>
        </div>
      </div>
      <div className="footer">
        <h1>Thank You for visit</h1>
        <p> 2025 - By Harshal Mahajan </p>
      </div>
    </div>
  )
}
