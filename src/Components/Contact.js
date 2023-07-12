import React from 'react';
import { useNavigate } from "react-router-dom";
import { send } from 'emailjs-com';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


const Contact = () => {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    send(
      'service_hy1erbw',
      'template_qiydo67',
      {
        from_name: event.target.name.value,
        from_email: event.target.email.value,
        message: event.target.message.value,
      },
      'rfcLPeNpYr0tIqt-i'
    )
      .then((response) => {
        console.log('Email sent successfully!', response);
        navigate("/")

      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <div className='home-head'>
        <h1 className='home-head-top'>Rent Ahh</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-info'>
          <div>
            <LocationOnIcon className='contact-icon' fontSize='large' />
            Chennai
          </div>
          <div>
            <EmailIcon className='contact-icon' fontSize='large' />
            dinesharun2525@gmail.com
          </div>
          <div>
            <PhoneIcon className='contact-icon' fontSize='large' />
            +91 1234 567 890
          </div>
          <div>
            <AccessTimeFilledIcon className='contact-icon' fontSize='large' />
            Mon - Fri 8:00 AM to 5:00 PM
          </div>
        </div>
        <div className='contact-form'>
          <h2>Contact Us</h2>
          <form className='contact' onSubmit={handleSubmit}>
            <input type='text' name='name' className='text-box' placeholder='Name' required />
            <input type='text' name='email' className='text-box' placeholder='Email' required />
            <textarea name='message' rows='5' placeholder='Message' required></textarea>
            <input type='submit' name='submit' className='send-btn' value='Send' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;



