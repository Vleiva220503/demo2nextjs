// Button.tsx
import React from 'react';
import ButtonProps from '../utils/Props';

const Button: React.FC<ButtonProps> = ({ text, onClick, className}) => (
  <button className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;


