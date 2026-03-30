import React from 'react';
import { ArrowRight, BrainCircuit, Activity, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="pill-badge glass-panel">
            <Activity size={14} className="accent-icon" />
            <span>Pioneering the Next Generation of AI</span>
          </div>
          <h1 className="hero-title animate-fade-in">
            Shaping the Future of <br/>
            <span className="gradient-text">Intelligent Systems</span>
          </h1>
          <p className="hero-subtitle">
            Nexus AI Lab is a premier research team dedicated to advancing Large Language Models, Generative AI, and Resource-Efficient Machine Learning for real-world impact.
          </p>
          <div className="hero-actions">
            <Link to="/research" className="btn-primary">
              Explore Our Research <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/publications" className="btn-secondary">
              Latest Publications
            </Link>
          </div>
        </div>
        <div className="hero-visual glass-panel">
          {/* Abstract AI Representation */}
          <div className="brain-wrapper glow-effect">
            <BrainCircuit size={120} className="accent-icon" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section section">
        <h2 className="section-title">Lab Highlights</h2>
        <div className="card-grid">
          <div className="glass-card stat-card">
            <div className="stat-number gradient-text">40+</div>
            <div className="stat-label">Publications in Top Venues (NeurIPS, ICML, ICLR)</div>
          </div>
          <div className="glass-card stat-card">
            <div className="stat-number gradient-text">15+</div>
            <div className="stat-label">Active Open Source Projects</div>
          </div>
          <div className="glass-card stat-card">
            <div className="stat-number gradient-text">20+</div>
            <div className="stat-label">Industry & Academic Partners</div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section section">
        <div className="card-grid two-cols">
          <Link to="/projects" className="glass-card interactive-card">
            <BookOpen size={32} className="card-icon" />
            <h3>Open Source & Projects</h3>
            <p>Discover our models, datasets, and prototype applications designed for reproducibility.</p>
          </Link>
          <Link to="/people" className="glass-card interactive-card">
            <Users size={32} className="card-icon" />
            <h3>Meet the Team</h3>
            <p>Our lab is powered by visionary faculty, PhD scholars, and undergraduate researchers.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
