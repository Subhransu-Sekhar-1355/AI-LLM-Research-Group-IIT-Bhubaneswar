import React from 'react';
import { Mail, MapPin, Phone, Code, Briefcase, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">AI & LLM Research Group, IIT Bhubaneswar</h3>
          <p className="footer-text">
            Advancing the frontiers of Artificial Intelligence, Large Language Models, and Efficient Computing at
            the Indian Institute of Technology Bhubaneswar.
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
            <li><MapPin size={16} className="contact-icon" /> School of Electrical Sciences, IIT Bhubaneswar</li>
            <li><Mail size={16} className="contact-icon" /> ai-llm-lab@iitbbs.ac.in</li>
            <li><Phone size={16} className="contact-icon" /> +91-674-XXX-XXXX</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AI & LLM Research Group, IIT Bhubaneswar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
