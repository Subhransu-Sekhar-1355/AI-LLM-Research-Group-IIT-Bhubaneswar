import React from 'react';
import { Mail, MapPin, Phone, Code, Briefcase, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Nexus AI Lab</h3>
          <p className="footer-text">
            Advancing the frontiers of Artificial Intelligence, Large Language Models, and Efficient Computing.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Code size={20} /></a>
            <a href="#" className="social-icon"><MessageCircle size={20} /></a>
            <a href="#" className="social-icon"><Briefcase size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title small">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/research">Research Areas</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/opportunities">Join the Lab</a></li>
            <li><a href="/news">Latest News</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title small">Contact Us</h4>
          <ul className="contact-info">
            <li><MapPin size={16} className="contact-icon" /> AI Research Center, Room 404</li>
            <li><Mail size={16} className="contact-icon" /> nexus@university.edu</li>
            <li><Phone size={16} className="contact-icon" /> +1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexus AI Research Lab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
