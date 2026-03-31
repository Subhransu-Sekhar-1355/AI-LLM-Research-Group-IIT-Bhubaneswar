import React from 'react';
import { Calendar, Award, Mic, FileText } from 'lucide-react';
import './Pages.css';

const newsItems = [
  {
    date: "March 15, 2024",
    title: "Two Papers Accepted at NeurIPS 2024",
    type: "Publication",
    icon: <FileText size={24} className="accent-icon" />,
    content: "Our work on 'Efficient LLM Routing' and 'Sparse Context Windows' has been accepted to NeurIPS 2024. Congrats to the team!"
  },
  {
    date: "February 28, 2024",
    title: "Best Paper Award at Workshop on Efficient ML",
    type: "Award",
    icon: <Award size={24} className="accent-icon" style={{ color: "gold" }} />,
    content: "Alice and Bob's collaborative paper won the Best Paper Award at the ICLR Edge ML Workshop."
  },
  {
    date: "January 10, 2024",
    title: "Invited Talk at TechCorp Research",
    type: "Seminar",
    icon: <Mic size={24} className="accent-icon" />,
    content: "Dr. Turing delivered a keynote on 'The Future of Post-Transformer Architectures' at the Annual AI Summit."
  }
];

const News = () => {
  return (
    <div className="news-container page-content">
      <div className="section-header" style={{ marginBottom: "3rem" }}>
        <h1>News & Events</h1>
        <p className="hero-subtitle">
          Updates, announcements, and achievements from the AI & LLM Research Group at IIT Bhubaneswar.
        </p>
      </div>

      <div className="timeline" style={{ position: "relative", paddingLeft: "2rem", borderLeft: "2px solid var(--border-glass)" }}>
        {newsItems.map((item, index) => (
          <div key={index} className="timeline-item" style={{ position: "relative", marginBottom: "3rem" }}>
            <div className="timeline-dot" style={{ position: "absolute", left: "-2rem", transform: "translateX(-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid var(--accent-blue)", zIndex: 1 }}>
              {item.icon}
            </div>
            <div className="glass-card" style={{ marginLeft: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" }}>
                <span className="pill-badge" style={{ margin: 0 }}>{item.type}</span>
                <span style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <Calendar size={16} /> {item.date}
                </span>
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{item.title}</h3>
              <p style={{ color: "var(--text-primary)" }}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
