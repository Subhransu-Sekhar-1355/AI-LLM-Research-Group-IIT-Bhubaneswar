import React from 'react';
import { Database, Code, BookText, Link as LinkIcon } from 'lucide-react';
import './Pages.css';

const resourcesData = [
  {
    category: "Datasets",
    icon: <Database size={32} className="card-icon" />,
    items: [
      { name: "Nexus-Instruct-1M", description: "A high-quality dataset of 1 million instruction-following pairs filtered for complexity and diversity.", link: "#" },
      { name: "MIMIC-Nexus-Extract", description: "Pre-processed multimodal medical dataset compliant with HIPAA.", link: "#" }
    ]
  },
  {
    category: "Code Templates",
    icon: <Code size={32} className="card-icon" />,
    items: [
      { name: "PyTorch DPO Micro-template", description: "Minimal boilerplate for Direct Preference Optimization on custom datasets.", link: "#" },
      { name: "CUDA Sparse Matrices kernel", description: "Ready-to-use C++ extensions for PyTorch for sparse multiplications.", link: "#" }
    ]
  },
  {
    category: "Tutorials & Lecture Notes",
    icon: <BookText size={32} className="card-icon" />,
    items: [
      { name: "CS-AI-701: Advanced Generative Models", description: "Full slide deck and video recordings from Spring 2024.", link: "#" },
      { name: "Intro to Parameter Efficient Fine-Tuning", description: "A comprehensive blog post and Jupyter notebook tutorial.", link: "#" }
    ]
  }
];

const Resources = () => {
  return (
    <div className="resources-container page-content">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <h1>Lab Resources</h1>
        <p className="hero-subtitle">
          Open access to our datasets, tutorials, and boilerplate code to accelerate your research.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {resourcesData.map((section, index) => (
          <div key={index} className="glass-panel" style={{ padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", borderBottom: "1px solid var(--border-glass)", paddingBottom: "1rem" }}>
              {section.icon}
              <h2 style={{ margin: 0, fontSize: "1.8rem" }}>{section.category}</h2>
            </div>
            
            <div className="card-grid">
              {section.items.map((item, idx) => (
                <div key={idx} className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", background: "rgba(0,0,0,0.2)" }}>
                  <h3 style={{ fontSize: "1.2rem", color: "var(--accent-blue)" }}>{item.name}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1rem", flex: 1 }}>{item.description}</p>
                  <a href={item.link} className="btn-secondary" style={{ alignSelf: "flex-start", padding: "0.5rem 1rem" }}>
                    <LinkIcon size={16} style={{ marginRight: "0.5rem" }} /> Access
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
