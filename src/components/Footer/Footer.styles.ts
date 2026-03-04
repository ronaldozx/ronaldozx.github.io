import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 60px 8vw 40px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

export const FooterSection = styled.div``;

export const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
`;

export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const FooterTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  text-decoration: none;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: inherit;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary}40,
      ${({ theme }) => theme.colors.secondary}40
    );
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
