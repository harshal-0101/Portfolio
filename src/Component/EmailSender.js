import React from 'react'
import './allComponet.css'

export default function EmailSender() {
  return (
    <div>
        <div className="sendMail">
          <div className='email-form'>
              <label>Name</label><br />
              <input type='text' placeholder='User Name' /><br />
              <label>Email</label><br />
              <input type='text' placeholder='UserName123@gmail.com' /><br />
              <label>Your Massege</label><br />
              <textarea name="" id="" cols="30" rows="10"  placeholder='Massege'></textarea><br /><br />
              <button className='Submit' type='submit'>Submit</button>
          </div>
        </div>
    </div>
  )
}
