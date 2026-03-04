import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 30px rgba(97, 218, 251, 0.4),
                0 0 60px rgba(161, 143, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(97, 218, 251, 0.6),
                0 0 80px rgba(161, 143, 255, 0.4);
  }
`;

interface ButtonProps {
  variant?: 'primary' | 'gradient';
}

export const Button = styled.a<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ variant }) => (variant === 'gradient' ? '16px 40px' : '12px 32px')};
  border-radius: 50px;
  border: ${({ theme, variant }) =>
    variant === 'gradient'
      ? 'none'
      : `2px solid ${theme.colors.primary}`};
  background: ${({ theme, variant }) =>
    variant === 'gradient'
      ? `linear-gradient(135deg, #61dafb 0%, #a18fff 50%, #ff61d8 100%)`
      : 'rgba(255, 255, 255, 0.05)'};
  background-size: 200% 200%;
  color: ${({ variant }) => (variant === 'gradient' ? '#000' : '#fff')};
  font-weight: ${({ variant }) => (variant === 'gradient' ? '700' : '600')};
  font-size: ${({ variant }) => (variant === 'gradient' ? '1.15rem' : '1.05rem')};
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${({ variant }) =>
    variant === 'gradient'
      ? '0 8px 32px rgba(97, 218, 251, 0.4), 0 0 60px rgba(161, 143, 255, 0.3)'
      : '0 4px 20px rgba(97, 218, 251, 0.2)'}; 
  cursor: pointer;
  backdrop-filter: blur(10px);
  animation: ${({ variant }) => (variant === 'gradient' ? pulse : 'none')} 3s ease-in-out infinite;

  &::before {
    content: '';\n    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, ${({ variant }) => (variant === 'gradient' ? '0.4' : '0.1')}),
      transparent
    );
    transition: left 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50px;
    padding: 2px;
    background: ${({ theme, variant }) =>
      variant === 'gradient'
        ? 'linear-gradient(135deg, #61dafb, #a18fff, #ff61d8)'
        : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: ${({ variant }) => (variant === 'gradient' ? '0' : '0.6')};
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    background: ${({ theme, variant }) =>
      variant === 'gradient'
        ? 'linear-gradient(135deg, #61dafb 0%, #a18fff 50%, #ff61d8 100%)'
        : theme.colors.primary};
    color: ${({ variant }) => (variant === 'gradient' ? '#000' : '#000')};
    box-shadow: ${({ variant }) =>
      variant === 'gradient'
        ? '0 12px 48px rgba(97, 218, 251, 0.6), 0 0 80px rgba(161, 143, 255, 0.5)'
        : '0 8px 32px rgba(97, 218, 251, 0.6), 0 0 60px rgba(97, 218, 251, 0.4)'};
    border-color: ${({ variant }) => (variant === 'gradient' ? 'transparent' : 'transparent')};
  }

  &:hover::before {
    left: 100%;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  svg {
    font-size: 1.3rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: ${({ variant }) => (variant === 'gradient' ? 'translateY(3px)' : 'scale(1.2)')};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
`;
