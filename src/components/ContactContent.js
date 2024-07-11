import './ContactContentStyles.css'
import React from 'react'

export default function ContactContent() {
  return (
    <div className='form'>
      <div className="form-container">
        <form >
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here'></textarea>
            <button className="btn">Submit</button>
        </form>
      </div>
      
    </div>
  )
}
