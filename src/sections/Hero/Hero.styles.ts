import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-25px) rotate(2deg);
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const pulseRing = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
`;

export const HeroSection = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 160px;
  padding-left: 8vw;
  padding-right: 8vw;
  gap: 80px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  overflow: visible;

  /* Elementos decorativos */
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(97, 218, 251, 0.15) 0%,
      rgba(97, 218, 251, 0.05) 40%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(60px);
    animation: ${pulseRing} 8s ease-in-out infinite;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(161, 143, 255, 0.12) 0%,
      rgba(161, 143, 255, 0.06) 40%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(80px);
    animation: ${pulseRing} 10s ease-in-out infinite reverse;
    pointer-events: none;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    padding-top: 140px;
    text-align: center;
    gap: 50px;
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  z-index: ${({ theme }) => theme.zIndex.content + 1};
  animation: ${fadeInRight} 1s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  
  /* Card de fundo sutil */
  &::before {
    content: '';
    position: absolute;
    inset: -40px;
    background: linear-gradient(
      135deg,
      rgba(97, 218, 251, 0.03) 0%,
      rgba(161, 143, 255, 0.05) 100%
    );
    border-radius: 30px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    z-index: -1;
    opacity: 0.6;
  }

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

export const Greeting = styled.p`
  font-size: 1.1rem;
  letter-spacing: 4px;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    rgba(97, 218, 251, 0.9),
    rgba(161, 143, 255, 0.9)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  
  &::before {
    content: '▸';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 12px;
    font-size: 1.4rem;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

export const Name = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -1px;
  background: linear-gradient(
    135deg,
    #61dafb 0%,
    #a18fff 50%,
    #ff61d8 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards,
             ${gradientShift} 8s ease infinite;
  filter: drop-shadow(0 0 30px rgba(97, 218, 251, 0.4));
  position: relative;

  span {
    display: inline-block;
    background: linear-gradient(
      135deg,
      #ff61d8 0%,
      #a18fff 50%,
      #61dafb 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 8s ease infinite reverse;
  }

  @media (max-width: 968px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Role = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 0 2.5rem 0;
  color: rgba(255, 255, 255, 0.85);
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 2px;
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 968px) {
    padding-left: 0;
    
    &::before {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const IllustrationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  animation: ${fadeInUp} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s backwards;
  
  @media (max-width: 968px) {
    order: -1;
  }
`;

