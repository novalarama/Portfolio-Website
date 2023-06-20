import React from 'react'
import './Contact.css'

export default function Contact () {
    const sendGmail = () => {
        const email = 'novalakbarramadhany@gmail.com';
        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;
    
        window.open(gmailUrl, '_blank');
      };

  return (
    <section className="h-wrapper" id='contact'>
    <div className="contact flexCenter paddings innerWidth h-container">
       <p>So, ready to collaborate ?</p>
       <p>Talk with me.</p>
       <p>No worries, I’m a chill person :{')'}</p>
       <button onClick={sendGmail}>✉️ Contact Me</button>
    </div>
 </section>
  )
}