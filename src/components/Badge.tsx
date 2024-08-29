// src/components/ui/Badge.tsx

import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary';
}

const Badge: React.FC<BadgeProps> = ({ variant = 'primary', className, ...props }) => {
  let baseStyle = 'px-3 py-1 rounded text-sm font-medium';
  let variantStyle = '';

  switch (variant) {
    case 'primary':
      variantStyle = 'bg-blue-500 text-white';
      break;
    case 'secondary':
      variantStyle = 'bg-gray-200 text-black';
      break;
    default:
      variantStyle = 'bg-blue-500 text-white';
  }

  return (
    <span className={`${baseStyle} ${variantStyle} ${className}`} {...props} />
  );
};

export default Badge;
