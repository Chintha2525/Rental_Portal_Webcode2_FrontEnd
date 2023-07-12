import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Groups2Icon from '@mui/icons-material/Groups2';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ImageSlider = () => {
  const images = [
    '../Images/homeimg1.jpg',
    '../Images/homeimg5.jpg',
    '../Images/homeimg3.jpg',
    '../Images/homeimg2.jpg',
    '../Images/homeimg6.jpg',
    '../Images/homeimg4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      <div className='home-head'>
        <h1 className='home-head-top' >RentXpert</h1>
        <h2>Welcome to our rental portal</h2>
        <p>
          Start your rental journey and unlock a world of possibilities.
          Explore, experience, and create unforgettable memories.
        </p>

      </div>
      <div className="image-container">
        <img
          className="slider-image"
          src={images[currentIndex]}
          alt={`Img ${currentIndex + 1}`}
        />
      </div>

      <div className="home-box">
        <div className="home-option">
          <div className="home-option-1">
            <HomeIcon fontSize="large" />
          </div>
          <div className="home-option-2">
            <div className="home-op">
              <h6>150+</h6>
              <p>Branches</p>
            </div>
          </div>
        </div>
        <div className="home-option">
          <div className="home-option-1">
            <ProductionQuantityLimitsIcon fontSize="large" />
          </div>
          <div className="home-option-2">
            <div className="home-op">
              <h6>5770+</h6>
              <p>Products Rented</p>
            </div>
          </div>
        </div>
        <div className="home-option">
          <div className="home-option-1">
            <Groups2Icon fontSize="large" />
          </div>
          <div className="home-option-2">
            <div className="home-op">
              <h6>450+</h6>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="home-option">
          <div className="home-option-1">
            <EngineeringIcon fontSize="large" />
          </div>
          <div className="home-option-2">
            <div className="home-op">
              <h6>200+</h6>
              <p>Employees</p>
            </div>
          </div>
        </div>
      </div>
      <div className='home-contact'>
        <h1>Get In Touch</h1>
        <p>We would love to respond to your queries and help you succeed.</p>
        <p>Feel free to get in touch with us.</p>
        <Link to='/contact'>
          <button>Contact Us</button>
        </Link>
      </div>
      <footer className="footer">
        <div className="footer__content">
          <p>&copy; 2023 Rental Portal. All rights reserved.</p>
          <div className="footer__social-icons">
            <a href='https://www.linkedin.com/in/chinthamani-g-02b29a265/' target='_blank' className='icon' rel='noopener noreferrer'>
              <LinkedInIcon fontSize='large' />
            </a>

            <a href='https://github.com/Chintha2525' target='_blank' className='icon' rel='noopener noreferrer'>
              <GitHubIcon fontSize='large' />
            </a>

          </div>

        </div>

      </footer>
    </div>
  );
};

export default ImageSlider;

