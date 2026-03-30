import React, { useState } from 'react';
import { FileText, ExternalLink, Link as LinkIcon, Download } from 'lucide-react';
import './Pages.css';

const publicationsData = [
  {
    title: "Optimizing State Space Models with Low-Rank Adapters",
    authors: "A. Smith, B. Doe, C. Researcher",
    venue: "NeurIPS",
    year: "2024",
    link: "#",
    pdf: "#",
    doi: "10.1234/nexus.2024.1",
  },
  {
    title: "Evaluating Parameter-Efficient Fine-Tuning across Domains",
    authors: "B. Doe, A. Smith",
    venue: "ICLR",
    year: "2024",
    link: "#",
    pdf: "#",
    doi: "10.1234/nexus.2024.2",
  },
  {
    title: "Federated Learning for Clinical Time-Series Analysis",
    authors: "J. Roe, B. Doe",
    venue: "Machine Learning in Healthcare (MLHC)",
    year: "2023",
    link: "#",
    pdf: "#",
    doi: "10.1234/nexus.2023.1",
  },
  {
    title: "Understanding Attention Limitations in Deep LLMs",
    authors: "C. Researcher, A. Smith",
    venue: "ICML",
    year: "2023",
    link: "#",
    pdf: "#",
    doi: "10.1234/nexus.2023.2",
  }
];

const Publications = () => {
  const [filterYear, setFilterYear] = useState('All');
  
  const years = ['All', '2024', '2023', '2022'];
  
  const filteredPubs = filterYear === 'All' 
    ? publicationsData 
    : publicationsData.filter(pub => pub.year === filterYear);

  return (
    <div className="publications-container page-content">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <h1>Publications</h1>
        <p className="hero-subtitle">
          Our latest research papers, published in leading conferences and journals.
        </p>
      </div>
      
      <div className="filter-container mb-8" style={{ marginBottom: "2rem", display: "flex", gap: "1rem" }}>
        {years.map(year => (
          <button 
            key={year}
            onClick={() => setFilterYear(year)}
            className={`btn-secondary ${filterYear === year ? 'active-filter' : ''}`}
            style={filterYear === year ? { background: 'var(--accent-blue)', borderColor: 'var(--accent-blue)' } : {}}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="publications-list" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {filteredPubs.map((pub, index) => (
          <div key={index} className="glass-panel" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <h3 style={{ fontSize: "1.25rem", color: "white" }}>{pub.title}</h3>
            <p style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>{pub.authors}</p>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <span className="pill-badge" style={{ margin: 0, background: "rgba(59, 130, 246, 0.1)" }}>
                {pub.venue} {pub.year}
              </span>
              
              <div className="pub-links" style={{ display: "flex", gap: "1rem" }}>
                <a href={pub.link} className="btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                  <LinkIcon size={14} style={{ marginRight: "0.5rem" }} /> DOI: {pub.doi}
                </a>
                <a href={pub.pdf} className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                  <Download size={14} style={{ marginRight: "0.5rem" }} /> PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
