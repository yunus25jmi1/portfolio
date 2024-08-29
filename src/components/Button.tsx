// src/components/ui/Button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  let baseStyle = 'px-4 py-2 rounded font-semibold transition-colors';
  let variantStyle = '';

  switch (variant) {
    case 'primary':
      variantStyle = 'bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'secondary':
      variantStyle = 'bg-gray-500 text-white hover:bg-gray-600';
      break;
    case 'outline':
      variantStyle = 'border border-blue-500 text-blue-500 hover:bg-blue-100';
      break;
    default:
      variantStyle = 'bg-blue-500 text-white hover:bg-blue-600';
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props} />
  );
};

export default Button;
