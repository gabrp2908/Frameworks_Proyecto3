import React from 'react';

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
          <h1 className="auth-main-title">Portafolio Gabriela Rey</h1>
          <h2 className="auth-subtitle">Proyecto 3 - Manejo de Frameworks</h2>
          <div className="auth-icon"></div>
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