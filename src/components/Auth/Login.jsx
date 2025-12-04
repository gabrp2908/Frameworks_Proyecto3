import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import AuthCard from './AuthCard';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.username || !formData.password) {
      setError('Por favor completa todos los campos');
      return;
    }

    // Usuarios almacenados
    const testUsers = JSON.parse(localStorage.getItem('testUsers') || '[]');
    const defaultUsers = [
      { username: 'admin', password: '1234' }
    ];
    
    const allUsers = testUsers.length > 0 ? testUsers : defaultUsers;
    
    const userExists = allUsers.find(
      user => user.username === formData.username && user.password === formData.password
    );

    if (userExists) {
      // Guardar en localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', formData.username);
      
      // Redirigir al inicio
      navigate('/');
      
      // Recargar para actualizar navbar
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <AuthCard 
      title="Iniciar Sesión"
      hint={
        <div className="auth-hint">
          <p className="hint-title">Usuario de prueba:</p>
          <div className="demo-users">
            <span className="demo-user">admin / 1234</span>
          </div>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
            placeholder="Ingresa tu nombre de usuario"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            placeholder="Ingresa tu contraseña"
            required
            minLength="4"
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button type="submit" className="auth-submit-btn btn-primary">
          <span>Ingresar</span>
        </button>
      </form>
      
      <div className="auth-links">
        <p className="auth-text">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="auth-link">
            <strong>Regístrate aquí</strong>
          </Link>
        </p>
      </div>
    </AuthCard>
  );
};

export default Login;