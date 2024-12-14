import React from 'react';
import { colors } from '../../styles/colors';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-lg font-medium transition-colors duration-200';

  const variantStyles = {
    primary: `bg-[${colors.primary.orange}] text-white hover:bg-[${colors.primary.darkOrange}]`,
    secondary: `bg-[${colors.background.secondary}] text-[${colors.text.primary}] hover:bg-[${colors.border.light}]`,
    outline: `border-2 border-[${colors.primary.orange}] text-[${colors.primary.orange}] hover:bg-[${colors.primary.orange}] hover:text-white`,
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
