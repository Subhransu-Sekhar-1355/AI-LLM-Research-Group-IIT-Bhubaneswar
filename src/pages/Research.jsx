import React from 'react';
import { Cpu, Zap, HeartPulse, Network } from 'lucide-react';
import './Pages.css';

const researchAreas = [
  {
    title: "LLM Optimization",
    icon: <Network size={40} className="card-icon" />,
    description: "Developing novel techniques for instruction tuning, alignment, and parameter-efficient fine-tuning (PEFT) to make foundational models more accessible and specialized.",
    methodologies: "LoRA, QLoRA, RLHF, Direct Preference Optimization",
    dataset: "Nexus-Instruct-1M"
  },
  {
    title: "Model Compression",
    icon: <Zap size={40} className="card-icon" />,
    description: "Reducing the computational and memory footprint of neural networks without compromising on performance. We focus on quantization, pruning, and knowledge distillation.",
    methodologies: "Post-training Quantization, Structured Pruning",
    dataset: "Tiny-ImageNet-Compressed"
  },
  {
    title: "Efficient AI Architectures",
    icon: <Cpu size={40} className="card-icon" />,
    description: "Designing alternative architectures to Transformers, such as State Space Models (SSMs) and linear-complexity attention mechanisms, focusing on highly resourced constrained edge devices.",
    methodologies: "Mamba integration, Sub-quadratic Attention",
    dataset: "Edge-Benchmark-Suite"
  },
  {
    title: "Healthcare AI",
    icon: <HeartPulse size={40} className="card-icon" />,
    description: "Applying multimodal foundational models to medical records and imaging to assist clinical decision support systems and personalized medicine.",
    methodologies: "Multimodal Fusion, Explainable AI (XAI)",
    dataset: "MIMIC-Nexus-Extract"
  }
];

const Research = () => {
  return (
    <div className="research-container page-content">
      <div className="section-header text-center" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1>Research Domains</h1>
        <p className="hero-subtitle mx-auto" style={{ margin: "1.5rem auto 0" }}>
          Our mission is to bridge the gap between theoretical AI advancements and practical, efficient deployment.
        </p>
      </div>

      <div className="card-grid two-cols">
        {researchAreas.map((area, index) => (
          <div key={index} className="glass-card research-card">
            <div className="research-icon-wrapper mb-4" style={{ marginBottom: "1rem" }}>
              {area.icon}
            </div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>{area.title}</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              {area.description}
            </p>
            
            <div className="methodologies" style={{ marginBottom: "1rem" }}>
              <strong style={{ color: "var(--accent-blue)" }}>Key Methodologies:</strong>
              <p style={{ fontSize: "0.9rem", color: "white" }}>{area.methodologies}</p>
            </div>
            
            <div className="dataset-link">
              <strong style={{ color: "var(--accent-purple)" }}>Related Dataset:</strong>
              <div style={{ marginTop: "0.5rem" }}>
                <span className="pill-badge" style={{ margin: 0, padding: "0.25rem 0.75rem", fontSize: "0.75rem" }}>
                  {area.dataset}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
