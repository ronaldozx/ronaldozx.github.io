import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 8vw;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const AboutImageContainer = styled.div`
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 3 / 4;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease;
  display: block;

  &:hover {
    transform: scale(1.02);
  }
`;

export const AboutContent = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1.5rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(97, 218, 251, 0.2);
  }
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
`;

export const StatLabel = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;
