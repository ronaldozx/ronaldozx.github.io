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

export const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 8vw;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;

export const ProjectsContainer = styled.div`
  max-width: 1400px;
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.8s ease-out backwards;
  position: relative;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.colors.primary}60;
    box-shadow: 0 20px 60px rgba(97, 218, 251, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(97, 218, 251, 0.1),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

export const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: linear-gradient(
    135deg,
    rgba(97, 218, 251, 0.2),
    rgba(161, 143, 255, 0.2)
  );
`;

export const ProjectContent = styled.div`
  padding: 32px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 20px;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ProjectTag = styled.span`
  background: rgba(97, 218, 251, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(97, 218, 251, 0.3);
  font-weight: 500;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProjectLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    color: #fff;
    border: none;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(97, 218, 251, 0.4);
    }
  }

  &.secondary {
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary}20;
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
