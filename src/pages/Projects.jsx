import React from 'react';
import { Code, PlayCircle, ExternalLink } from 'lucide-react';
import './Pages.css';

const projectsData = [
  {
    title: "LightWeight-LLM",
    type: "Research Prototype / BTP Work",
    description: "An open-source library integrating sparse attention and optimized CUDA kernels to allow inference of 7B models on standard consumer GPUs with minimal precision loss.",
    results: "Achieved 3x faster inference on RTX 3090.",
    github: "https://github.com/nexus-lab/lightweight-llm",
    demo: "#"
  },
  {
    title: "Med-Assist Multimodal AI",
    type: "Student Project",
    description: "A proof-of-concept pipeline combining EHR data with X-Ray images using cross-attention mechanisms, aimed at providing secondary diagnosis validation for radiologists.",
    results: "92% validation accuracy on the customized MIMIC dataset.",
    github: "https://github.com/nexus-lab/med-assist",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <div className="projects-container page-content">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <h1>Featured Projects</h1>
        <p className="hero-subtitle">
          Open-source work, student BTPs, and research prototypes emphasizing reproducibility.
        </p>
      </div>

      <div className="card-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="glass-card flex flex-col h-full" style={{ display: "flex", flexDirection: "column" }}>
            <span className="pill-badge" style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>{project.type}</span>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{project.title}</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", flex: 1 }}>
              {project.description}
            </p>
            
            <div className="results-box" style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
              <strong style={{ color: "var(--accent-purple)", display: "block", marginBottom: "0.25rem" }}>Key Results:</strong>
              <span style={{ fontSize: "0.9rem" }}>{project.results}</span>
            </div>

            <div className="project-links" style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
              <a href={project.github} className="btn-secondary" style={{ flex: 1 }}>
                <Code size={18} style={{ marginRight: "0.5rem" }} /> GitHub
              </a>
              <a href={project.demo} className="btn-primary" style={{ flex: 1 }}>
                <PlayCircle size={18} style={{ marginRight: "0.5rem" }} /> Demo Space
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
