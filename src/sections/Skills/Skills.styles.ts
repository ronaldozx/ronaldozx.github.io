import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

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

export const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 8vw;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  background: rgba(0, 0, 0, 0.2);
`;

export const SkillsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 40px 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.8s ease-out backwards;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.colors.primary}40;
    box-shadow: 0 20px 60px rgba(97, 218, 251, 0.15);
  }
`;

export const CategoryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  animation: ${float} 3s ease-in-out infinite;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  font-weight: 600;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const SkillName = styled.span`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
`;

export const SkillLevel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

interface SkillProgressProps {
  level: number;
}

export const SkillProgress = styled.div<SkillProgressProps>`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  border-radius: 10px;
  width: ${({ level }) => level}%;
  transition: width 1s ease-out 0.3s;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}80;
`;
