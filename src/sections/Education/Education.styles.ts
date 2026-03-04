import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 12px rgba(97,218,251,0.25); }
  50%       { box-shadow: 0 0 28px rgba(97,218,251,0.55); }
`;

const lineGrow = keyframes`
  from { height: 0; }
  to   { height: 100%; }
`;

export const EducationSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 8vw;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
`;

export const EducationContainer = styled.div`
  max-width: 900px;
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

/* ── Timeline ─────────────────────────────────────────────── */

export const Timeline = styled.div`
  position: relative;
  padding-left: 40px;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    animation: ${lineGrow} 1.2s ease-out forwards;
    height: 0;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  /* dot */
  &::before {
    content: '';
    position: absolute;
    left: -34px;
    top: 24px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
  }
`;

export const EducationCard = styled.div`
  background: rgba(13, 19, 40, 0.75);
  border: 1px solid rgba(97, 218, 251, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 32px 36px;
  backdrop-filter: blur(12px);
  transition: border-color 0.3s, transform 0.3s;
  animation: ${glowPulse} 4s ease-in-out infinite;

  &:hover {
    border-color: rgba(97, 218, 251, 0.55);
    transform: translateX(6px);
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

export const InstitutionName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const StatusBadge = styled.span<{ $status: 'cursando' | 'concluído' | 'trancado' }>`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  white-space: nowrap;
  color: ${({ $status }) =>
    $status === 'concluído' ? '#00e5a0' :
    $status === 'cursando'  ? '#61dafb' :
                              '#f7c948'};
  background: ${({ $status }) =>
    $status === 'concluído' ? 'rgba(0,229,160,0.12)' :
    $status === 'cursando'  ? 'rgba(97,218,251,0.12)' :
                              'rgba(247,201,72,0.12)'};
  border: 1px solid ${({ $status }) =>
    $status === 'concluído' ? 'rgba(0,229,160,0.35)' :
    $status === 'cursando'  ? 'rgba(97,218,251,0.35)' :
                              'rgba(247,201,72,0.35)'};
`;

export const CourseName = styled.p`
  font-size: 1.05rem;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 6px;
`;

export const Period = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 10px;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.7;
  margin: 0;
`;
