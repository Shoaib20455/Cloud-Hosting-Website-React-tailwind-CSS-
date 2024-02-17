import React from 'react';
import '../footerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className='myfooter bg-gray-800'>
        <div className="footer-content">
          <h3>FOLLOW US</h3>
          <ul className="socials">
            <li><a href="https://www.facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebook} className='w-full h-6 py-2' /></a></li>
            <li><a href="https://www.twitter.com" target='_blank'><FontAwesomeIcon icon={faTwitter} className='w-full h-6 py-2' /></a></li>
            <li><a href="https://www.google.com" target='_blank'><FontAwesomeIcon icon={faGoogle} className='w-full h-6 py-2' /></a></li>
            <li><a href="https://www.youtube.com" target='_blank'><FontAwesomeIcon icon={faYoutube} className='w-full h-6 py-2' /></a></li>
            <li><a href="https://www.linkedin.com" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='w-full h-6 py-2' /></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>copyright &copy; <a href="#">ALL Right Reserved</a></p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
