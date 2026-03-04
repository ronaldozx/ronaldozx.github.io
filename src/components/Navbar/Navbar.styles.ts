import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 32px;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  height: 70px;
  max-width: 90vw;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  
  border: 1px solid rgba(255, 255, 255, 0.18);
  
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.37),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 0 rgba(255, 255, 255, 0.05),
    0 0 60px rgba(97, 218, 251, 0.08);
  
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(97, 218, 251, 0.3),
      rgba(161, 143, 255, 0.2)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.5;
  }
  
  &:hover {
    box-shadow: 
      0 8px 40px 0 rgba(0, 0, 0, 0.45),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.08),
      0 0 80px rgba(97, 218, 251, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 95vw;
    top: 16px;
    height: 60px;
  }

  @media (max-width: 480px) {
    max-width: calc(100% - 16px);
    top: 8px;
    height: 50px;
    border-radius: 12px;
  }
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 0 ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Logo = styled.div`
  font-size: 2.5rem;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 900;
  letter-spacing: 3px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 50%,
    #ff61d8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left: ${({ theme }) => theme.spacing.md};
  margin-right: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 20px rgba(97, 218, 251, 0.3));
  
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 30px rgba(97, 218, 251, 0.5));
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const NavItem = styled.li`
  font-weight: 600;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-size: 0.95rem;
  position: relative;
  padding: 8px 16px;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: linear-gradient(
      135deg,
      rgba(97, 218, 251, 0.15),
      rgba(161, 143, 255, 0.15)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 2px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 4px 8px;
    letter-spacing: 0.5px;
  }
`;

export const NavDots = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-right: ${({ theme }) => theme.spacing.lg};
  align-items: center;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: ${({ theme }) => theme.shadows.glow.primary};
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spacing.md};
`;
