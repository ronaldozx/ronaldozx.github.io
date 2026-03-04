import React from 'react';
import { IconType } from 'react-icons';
import { Button as StyledButton } from './Button.styles';

interface ButtonProps {
  href: string;
  icon?: IconType | string;
  ariaLabel?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'gradient';
  download?: boolean;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  icon,
  ariaLabel,
  children,
  variant = 'primary',
  download,
  target,
  rel,
}) => {
  const renderIcon = () => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      return (
        <span role="img" aria-label={ariaLabel}>
          {icon}
        </span>
      );
    }
    
    const IconComponent = icon as React.ComponentType<any>;
    return <IconComponent aria-label={ariaLabel} style={{ color: '#fff', fontSize: '1.2rem' }} />;
  };
  
  return (
    <StyledButton
      href={href}
      variant={variant}
      download={download}
      target={target}
      rel={rel}
    >
      {renderIcon()}
      {children}
    </StyledButton>
  );
};
