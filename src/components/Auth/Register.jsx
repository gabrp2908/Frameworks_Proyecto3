import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validaciones
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (formData.username.length < 3) {
      setError('El usuario debe tener al menos 3 caracteres');
      return;
    }

    if (formData.password.length < 4) {
      setError('La contraseña debe tener al menos 4 caracteres');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Verificar si el usuario ya existe
    const testUsers = JSON.parse(localStorage.getItem('testUsers') || '[]');
    const defaultUsers = [
      { username: 'admin', password: '1234' }
    ];
    
    const allUsers = testUsers.length > 0 ? [...defaultUsers, ...testUsers] : defaultUsers;
    
    const userExists = allUsers.find(user => user.username === formData.username);
    if (userExists) {
      setError('El usuario ya existe');
      return;
    }

    // Guardar nuevo usuario
    const newUser = {
      username: formData.username,
      password: formData.password
    };
    
    const updatedUsers = [...allUsers, newUser];
    localStorage.setItem('testUsers', JSON.stringify(updatedUsers));

    setSuccess('¡Usuario registrado exitosamente!');

    // Auto-login después de registro
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', formData.username);
      navigate('/');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <div className="icon-placeholder pulse">
              <span className="icon-text">👤</span>
            </div>
          </div>
          <h2 className="auth-title">Crear Cuenta</h2>
        </div>
        
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
              placeholder="Elige un nombre de usuario único"
              required
              minLength="3"
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
              placeholder="Crea una contraseña segura (mín. 4 caracteres)"
              required
              minLength="4"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
              placeholder="Repite tu contraseña"
              required
              minLength="4"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          
          <button type="submit" className="auth-submit-btn btn-primary">
            <span>Crear Cuenta</span>
            <span className="btn-icon">✓</span>
          </button>
        </form>
        
        <div className="auth-divider">
          <span>¿Ya tienes cuenta?</span>
        </div>
        
        <div className="auth-links">
          <p className="auth-text">
            Regresa a{' '}
            <Link to="/login" className="auth-link">
              <strong>Iniciar Sesión</strong>
            </Link>
          </p>
          
          <div className="auth-requirements">
            <p className="requirements-title">📋 Requisitos:</p>
            <ul className="requirements-list">
              <li>Usuario: mínimo 3 caracteres</li>
              <li>Contraseña: mínimo 4 caracteres</li>
              <li>Tu usuario debe ser único</li>
            </ul>
          </div>
          
          <Link to="/" className="auth-back-link">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;