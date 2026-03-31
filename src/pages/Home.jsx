import React from 'react';
import { ArrowRight, BrainCircuit, Activity, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Landing hero inspired by AI‑NLP‑ML layout */}
      <section className="hero-section hero-academic">
        <div className="hero-left">
          <div className="pill-badge glass-panel">
            <Activity size={14} className="accent-icon" />
            <span>AI & LLM Research Group · IIT Bhubaneswar</span>
          </div>

          <h1 className="hero-title animate-fade-in">
            THE <span className="gradient-text">AI &amp; LLM</span> GROUP
          </h1>
          <h2 className="hero-subheading">
            School of Electrical Sciences, <br />
            Indian Institute of Technology Bhubaneswar
          </h2>

          <div className="hero-about glass-panel">
            <h3>About</h3>
            <p>
              The AI &amp; LLM Research Group at IIT Bhubaneswar focuses on fundamental and applied research in
              Artificial Intelligence, Large Language Models, and Efficient Machine Learning. We work on problems
              spanning LLM optimization, model compression, efficient architectures, and AI for healthcare.
            </p>
            <p>
              Our members include faculty, PhD scholars and undergraduate researchers collaborating with academic and
              industry partners to build impactful, open and reproducible AI systems.
            </p>
          </div>

          <div className="hero-actions">
            <Link to="/news" className="btn-primary">
              Latest News <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/opportunities" className="btn-secondary">
              Join the Lab
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card glass-panel">
            <div className="hero-illustration">
              <BrainCircuit size={96} className="accent-icon" />
            </div>
            <div className="hero-card-content">
              <h3>Research Snapshot</h3>
              <ul>
                <li>Parameter‑efficient fine‑tuning for multilingual LLMs</li>
                <li>Compression pipelines for on‑device generative models</li>
                <li>Multimodal models for clinical decision support</li>
              </ul>
            </div>
          </div>

          <div className="hero-card glass-panel hero-news-card">
            <h3>Recent Highlight</h3>
            <p className="hero-news-date">March 2024</p>
            <p>
              Papers from the group on efficient LLM routing and sparsity‑aware inference received recognition at
              leading international venues.
            </p>
            <Link to="/publications" className="hero-news-link">
              View publications →
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas Snapshot */}
      <section className="section">
        <h2 className="section-title">Research Areas</h2>
        <div className="card-grid">
          <div className="glass-card">
            <h3>LLM Optimization</h3>
            <p className="hero-subtitle">
              Instruction tuning, alignment, PEFT and evaluation of foundation models for Indian and low-resource languages.
            </p>
          </div>
          <div className="glass-card">
            <h3>Model Compression</h3>
            <p className="hero-subtitle">
              Quantization, pruning and distillation for running large models on edge and resource-constrained devices.
            </p>
          </div>
          <div className="glass-card">
            <h3>Efficient & Trustworthy AI</h3>
            <p className="hero-subtitle">
              Architectures and algorithms for fast, robust and interpretable AI systems.
            </p>
          </div>
          <div className="glass-card">
            <h3>Healthcare AI</h3>
            <p className="hero-subtitle">
              Multimodal AI for clinical decision support, medical imaging and longitudinal health records.
            </p>
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
