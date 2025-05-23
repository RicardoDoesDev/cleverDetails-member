import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Clever Details is your premier destination for luxury experiences in Vilamoura. We specialize in curating exceptional moments for our valued members.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>📍 Vilamoura, Algarve, Portugal</li>
            <li>📞 +351 123 456 789</li>
            <li>✉️ info@cleverdetails.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/clever-details-logo.svg" alt="Clever Details" />
          <p>VILAMOURA LOCAL RENTALS</p>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Clever Details. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 