import React from 'react';
import { statsData } from '../../data/statsData';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <h2 className="section-title">Mi Trayectoria</h2>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-description">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;