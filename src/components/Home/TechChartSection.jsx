import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TechChartSection.css';

const TechChartSection = () => {
  const data = [
    { name: 'Javascript', value: 90 },
    { name: 'Java', value: 80 },
    { name: 'C++', value: 70 },
    { name: 'C#', value: 60 },
    { name: 'React', value: 50 },
    { name: 'Angular', value: 40 },
    { name: 'CSS', value: 30 },
    { name: 'Python', value: 20 },
  ];

  return (
    <section className="tech-chart-section">
      <h2 className="section-title">Tecnologías Más Utilizadas</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="url(#colorGradient)" />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={getComputedStyle(document.documentElement).getPropertyValue('--primary-blue')} />
                <stop offset="95%" stopColor={getComputedStyle(document.documentElement).getPropertyValue('--primary-purple')} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default TechChartSection;