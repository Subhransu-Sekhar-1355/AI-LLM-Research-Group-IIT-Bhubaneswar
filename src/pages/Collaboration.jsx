import React from 'react';
import { Briefcase, Building2, Handshake, ShieldCheck } from 'lucide-react';
import './Pages.css';

const collaborationData = {
  industry: [
    { name: "DeepTech AI", logo: "DT", active: true },
    { name: "CloudCore Systems", logo: "CS", active: true },
    { name: "MedAssist Health", logo: "MH", active: true },
    { name: "NeuroVision", logo: "NV", active: false }
  ],
  funding: [
    { title: "Efficient Edge Inference Grant", agency: "National Science Foundation", amount: "$500,000", year: "2023-2026" },
    { title: "Robustness in Medical AI", agency: "NIH", amount: "$1.2M", year: "2024-2028" },
    { title: "Generative Architecures Fellowship", agency: "DeepTech University Program", amount: "$100,000", year: "2023-2024" }
  ]
};

const Collaboration = () => {
  return (
    <div className="collaboration-container page-content">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <h1>Collaboration & Funding</h1>
        <p className="hero-subtitle">
          We work closely with industry partners and funding agencies to translate fundamental research into real-world applications.
        </p>
      </div>

      <div className="collaboration-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>
        
        {/* Industry Partners */}
        <section>
          <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <Building2 size={28} className="accent-icon" /> Industry Partners
          </h2>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {collaborationData.industry.map((partner, index) => (
              <div key={index} className="glass-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "150px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                {!partner.active && (
                   <div style={{ position: "absolute", top: "10px", right: "10px", fontSize: "0.7rem", color: "var(--text-secondary)", background: "rgba(255,255,255,0.1)", padding: "0.1rem 0.5rem", borderRadius: "10px" }}>Past</div>
                )}
                <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: "linear-gradient(135deg, var(--bg-secondary), var(--bg-glass))", border: "1px solid var(--border-glass)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: "bold", color: "var(--accent-blue)", marginBottom: "1rem" }}>
                  {partner.logo}
                </div>
                <h3 style={{ fontSize: "1.1rem" }}>{partner.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Funding Projects */}
        <section>
          <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <Briefcase size={28} className="accent-icon" /> Funded Projects
          </h2>
          <div className="funding-list" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {collaborationData.funding.map((grant, index) => (
              <div key={index} className="glass-panel" style={{ padding: "1.5rem", display: "flex", borderLeft: "4px solid var(--accent-purple)", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "flex-start", gap: "1rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>{grant.title}</h3>
                    <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontWeight: "500", marginBottom: "0.25rem" }}>
                      <Handshake size={16} className="accent-icon" /> {grant.agency}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span className="pill-badge" style={{ margin: "0 0 0.5rem 0", background: "rgba(139, 92, 246, 0.1)" }}>{grant.year}</span>
                    <p style={{ color: "var(--text-primary)", fontWeight: "bold", fontSize: "1.1rem" }}>{grant.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Collaboration;
