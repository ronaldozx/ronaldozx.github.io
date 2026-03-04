import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const borderGlow = keyframes`
  0%, 100% { border-color: rgba(97,218,251,0.2); }
  50%       { border-color: rgba(139,92,246,0.45); }
`;

export const CoursesSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 8vw;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;

export const CoursesContainer = styled.div`
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
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.1rem;
`;

export const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CourseCard = styled.div`
  background: rgba(13, 19, 40, 0.75);
  border: 1px solid rgba(97, 218, 251, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 28px 26px;
  backdrop-filter: blur(12px);
  transition: transform 0.3s, border-color 0.3s;
  animation: ${borderGlow} 5s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(97, 218, 251, 0.5);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const PlatformIcon = styled.div<{ $color: string }>`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ $color }) => $color}22;
  border: 1px solid ${({ $color }) => $color}55;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
`;

export const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Platform = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CourseTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.35;
  margin: 0;
`;

export const CourseDuration = styled.span`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

export const Tag = styled.span<{ $color: string }>`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}18;
  border: 1px solid ${({ $color }) => $color}40;
`;

export const CertificateBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  width: fit-content;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid rgba(97,218,251,0.3);
  background: rgba(97,218,251,0.07);
  transition: background 0.2s, border-color 0.2s;

  background-size: 200% auto;
  background-image: linear-gradient(
    90deg,
    rgba(97,218,251,0.07) 0%,
    rgba(97,218,251,0.18) 50%,
    rgba(97,218,251,0.07) 100%
  );
  animation: ${shimmer} 3s linear infinite;

  &:hover {
    background: rgba(97,218,251,0.18);
    border-color: rgba(97,218,251,0.6);
  }

  &[href='#'] {
    pointer-events: none;
    opacity: 0.45;
  }
`;
