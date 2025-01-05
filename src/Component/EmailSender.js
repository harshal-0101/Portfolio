import React, { useState } from 'react';
import './allComponet.css';
import emailjs from '@emailjs/browser';

export default function EmailSender() {
  const [showAlert, setShowAlert] = useState(false);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!Name || !Email || !Message) {
      setError('Please fill out all fields. *');  // Set the error message
      return;  // Prevent further action if any field is empty
    }

    const serviceId = 'service_upzxkwb';
    const templateId = 'template_v0qgu6n';
    const publicKey = 'EN2nHkMtAjpcP9crg';

    const templateParams = {
      from_name: Name,
      from_email: Email,
      to_name: 'harshal mahajan',
      message: Message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setEmail('');
        setName('');
        setMessage('');
        setError(''); // Clear error message if email is sent successfully
      })
      .catch((error) => {
        console.log('Error sending email ', error);
      });

    // Show success alert after email is sent
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false); // Hide the alert after 3 seconds
    }, 3000);
  };

  return (
    <div>
      <div className="sendMail">
        {showAlert && (
          <div className="success-alert">
            Success! Email sent
          </div>
        )}

        <div onSubmit={handleSubmit}>
          <form className="email-form">
            <label>Name</label><br />
            <input
              type="text"
              placeholder="User Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            {(!Name && error) && <p className="error-message">Please fill this input *</p>} {/* Error message for Name */}
            <p>  </p>
            <br />
            <label>Email</label><br />
            <input
              type="text"
              placeholder="UserName123@gmail.com"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {(!Email && error) && <p className="error-message">Please fill this input *</p>} {/* Error message for Email */}
            <br /><br />
            <label>Your Message</label><br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {(!Message && error) && <p className="error-message">Please fill this input *</p>} {/* Error message for Message */}
            <br /><br />
            <button className="Submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
