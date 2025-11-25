import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const username = localStorage.getItem('username');
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/about', label: 'Sobre Mí' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-logo">
            <span className="logo-text">Portafolio</span>
          </Link>
        </div>
        
        <div className="navbar-tabs">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-tab ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="navbar-auth">
          {isAuthenticated ? (
            <div className="user-info">
              <span className="username">👋 {username}</span>
              <button onClick={handleLogout} className="auth-btn logout-btn">
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link to="/login" className="auth-btn login-btn">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;