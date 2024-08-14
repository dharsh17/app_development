import React from 'react';
import './Footer.css';
import instaLogo from '../assets/instagram.png';
import fbLogo from '../assets/facebook.png';
import linkedinLogo from '../assets/linkedin.png';
import youtubeLogo from '../assets/youtube.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instaLogo} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={fbLogo} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeLogo} alt="YouTube" />
        </a>
      </div>
      <div className="copyright">
        &copy; 2024 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
