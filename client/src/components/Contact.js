import React, { useRef, useState } from 'react';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';


function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k34tge6',
        'template_m30hhqs',
        form.current,
        '-SlGnOOZtLKZs6g0Y'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage('');
          setErrorMessage('An error occurred while sending the message.');
        }
      );
  };

  
  const handlePhoneCall = () => {
    window.location.href = 'tel:+972559995371'; 
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:yaeliscakes3@gmail.com'; 
  };
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/yaelis_cakes/', '_blank');
  };
  

  return (
    <div className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        </div>
        
      <form className='SendEmail' ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="contact-info">
  <div className="contact-item">
    <BsTelephoneOutbound className="contact-icon" color="green" onClick={handlePhoneCall} />
    <span onClick={handlePhoneCall}>+972559995371</span>
  </div>
  <div className="contact-item">
    <FaInstagram className="contact-icon-instagram" onClick={handleInstagramClick} />
    <span onClick={handleInstagramClick}>Follow us on Instagram</span>
  </div>
  <div className="contact-item">
    <p>
      Address: רחוב עין חנוך 22, 5596960 גני תקווה,ישראל
    </p>
  </div>
  <div className="contact-item">
    <p>
      Email: <span className="email-link" onClick={handleEmailClick}>yaeliscakes3@gmail.com</span>
    </p>
  </div>
</div>

      
    </div>
  );
}

export default Contact;
