import React from 'react';
import { Mail, BookOpen, User } from 'lucide-react';
import './Pages.css';

const peopleData = {
  faculty: [
    {
      name: "Dr. Alice Turing",
      role: "Lab Director / Principal Investigator",
      interests: "LLM Architecutres, Cognitive AI",
      scholar: "#"
    }
  ],
  phd: [
    {
      name: "Bob Smith",
      role: "Ph.D. Candidate",
      interests: "Efficient State Space Models",
      scholar: "#"
    },
    {
      name: "Charlie Davis",
      role: "Ph.D. Candidate",
      interests: "AI in Clinical Diagnostics",
      scholar: "#"
    }
  ],
  ug: [
    {
      name: "Diana Prince",
      role: "Undergraduate Researcher / BTP",
      interests: "Quantization Algorithms",
      scholar: null
    }
  ],
  alumni: [
    {
      name: "Dr. Ethan Hunt",
      role: "Alumni (Graduated 2023)",
      interests: "Now an AI Researcher at DeepTech",
      scholar: "#"
    }
  ]
};

const PersonCard = ({ person }) => (
  <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", textAlign: "center" }}>
    <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--accent-blue)" }}>
      <User size={40} className="accent-icon" />
    </div>
    <div>
      <h3 style={{ fontSize: "1.2rem", marginBottom: "0.25rem" }}>{person.name}</h3>
      <p style={{ color: "var(--accent-purple)", fontSize: "0.9rem", fontWeight: "500", marginBottom: "0.5rem" }}>{person.role}</p>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "1rem" }}>{person.interests}</p>
    </div>
    
    <div style={{ marginTop: "auto", display: "flex", gap: "0.5rem" }}>
      {person.scholar && (
        <a href={person.scholar} className="btn-secondary" style={{ padding: "0.5rem", borderRadius: "50%" }} title="Google Scholar">
          <BookOpen size={16} />
        </a>
      )}
      <a href={`mailto:example@uni.edu`} className="btn-secondary" style={{ padding: "0.5rem", borderRadius: "50%" }} title="Email">
        <Mail size={16} />
      </a>
    </div>
  </div>
);

const People = () => {
  return (
    <div className="people-container page-content">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <h1>Our Team</h1>
        <p className="hero-subtitle">
          Meet the brilliant minds behind the research at Nexus AI Lab.
        </p>
      </div>

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border-glass)", paddingBottom: "1rem" }}>Faculty</h2>
        <div className="card-grid">
          {peopleData.faculty.map((person, idx) => <PersonCard key={idx} person={person} />)}
        </div>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border-glass)", paddingBottom: "1rem" }}>Ph.D. Students</h2>
        <div className="card-grid">
          {peopleData.phd.map((person, idx) => <PersonCard key={idx} person={person} />)}
        </div>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border-glass)", paddingBottom: "1rem" }}>Undergraduate Researchers</h2>
        <div className="card-grid">
          {peopleData.ug.map((person, idx) => <PersonCard key={idx} person={person} />)}
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "2rem", borderBottom: "1px solid var(--border-glass)", paddingBottom: "1rem" }}>Alumni</h2>
        <div className="card-grid">
          {peopleData.alumni.map((person, idx) => <PersonCard key={idx} person={person} />)}
        </div>
      </section>
    </div>
  );
};

export default People;
