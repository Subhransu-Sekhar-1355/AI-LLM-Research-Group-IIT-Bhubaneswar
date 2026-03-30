import React from 'react';
import { Target, Lightbulb, Mail } from 'lucide-react';
import './Pages.css';

const Opportunities = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application simulated! In a real app, this would send an email or API request.');
  };

  return (
    <div className="opportunities-container page-content">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <h1>Join the Lab</h1>
        <p className="hero-subtitle">
          We are always looking for passionate PhD students and undergraduate researchers to join our mission.
        </p>
      </div>

      <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
        <div className="info-side">
          <div className="glass-card mb-6" style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Target size={28} className="accent-icon" />
              <h2 style={{ fontSize: "1.5rem", margin: 0 }}>What We Look For</h2>
            </div>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
              Strong mathematical foundations (linear algebra, probability), proficiency in Python and PyTorch/JAX, and a passion for fundamental AI research versus pure applied ML.
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Lightbulb size={28} className="accent-icon" />
              <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Research Interests Match</h2>
            </div>
            <ul style={{ color: "var(--text-secondary)", paddingLeft: "1.5rem", lineHeight: "2" }}>
              <li>LLM alignment and evaluation</li>
              <li>Sparse and efficient model topologies</li>
              <li>Explainability in high-dimension spaces</li>
            </ul>
          </div>
        </div>

        <div className="form-side">
          <div className="glass-panel" style={{ padding: "2.5rem" }}>
            <h2 style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={24} className="accent-icon" /> Application Form
            </h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Full Name</label>
                <input type="text" required style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(0,0,0,0.5)", border: "1px solid var(--border-glass)", color: "white", outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>University Email</label>
                <input type="email" required style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(0,0,0,0.5)", border: "1px solid var(--border-glass)", color: "white", outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Applying For</label>
                <select style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(0,0,0,0.5)", border: "1px solid var(--border-glass)", color: "white", outline: "none" }}>
                  <option>Ph.D. Position</option>
                  <option>Undergraduate Research / BTP</option>
                  <option>Postdoctoral Fellowship</option>
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Link to Resume / CV (Google Drive/Dropbox)</label>
                <input type="url" required style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(0,0,0,0.5)", border: "1px solid var(--border-glass)", color: "white", outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Brief Statement of Interest</label>
                <textarea rows="4" required style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", background: "rgba(0,0,0,0.5)", border: "1px solid var(--border-glass)", color: "white", outline: "none", resize: "vertical" }}></textarea>
              </div>
              
              <button type="submit" className="btn-primary" style={{ marginTop: "1rem" }}>Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
