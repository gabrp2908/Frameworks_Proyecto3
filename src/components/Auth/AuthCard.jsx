import React from 'react';
import './Auth.css'

const AuthCard = ({ 
  title, 
  subtitle, 
  icon, 
  children, 
  hint 
}) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-main-title">Portafolio</h1>
          <h2 className="auth-subtitle">Proyecto 3 - Manejo de Frameworks</h2>
          <div className="auth-icon">
            {icon && (
              <div className="icon-placeholder pulse">
                <span className="icon-text">{icon}</span>
              </div>
            )}
          </div>
          <h2 className="auth-form-title">{title}</h2>
        </div>
        
        {children}
        
        {hint && (
          <div className="auth-hint">
            <p>{hint}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCard;