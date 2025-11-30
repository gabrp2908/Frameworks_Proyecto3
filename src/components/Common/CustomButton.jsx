import React from 'react';
import './CustomButton.css';

const CustomButton = ({ variant = 'primary', text, onClick, type = 'button' }) => {
  return (
    <button 
      className={`custom-button btn-${variant}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default CustomButton;