import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLanguage } from '../../i18n/LanguageContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const glitchAnimation = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const expandLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const textReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface IntroContainerProps {
  $isExiting: boolean;
}

const IntroContainer = styled.div<IntroContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #020510 0%, #0a0215 50%, #02020a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${({ $isExiting }) => ($isExiting ? slideUp : fadeIn)} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(97, 218, 251, 0.15) 0%,
      rgba(161, 143, 255, 0.1) 40%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(80px);
    animation: ${fadeIn} 1s ease-out;
  }

  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(161, 143, 255, 0.12) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(60px);
    animation: ${fadeIn} 1.2s ease-out;
  }
`;

const IntroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 8rem;
  font-weight: 900;
  letter-spacing: 0.2em;
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
  filter: drop-shadow(0 0 40px rgba(97, 218, 251, 0.5));
  animation: ${textReveal} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 1rem 0;
  animation: ${textReveal} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s backwards;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Role = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 3rem 0;
  animation: ${textReveal} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s backwards;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Line = styled.div`
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #61dafb 50%,
    transparent 100%
  );
  animation: ${expandLine} 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s backwards;
  box-shadow: 0 0 20px rgba(97, 218, 251, 0.6);
`;

const LoadingText = styled.div`
  margin-top: 3rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  animation: ${textReveal} 1s cubic-bezier(0.16, 1, 0.3, 1) 1.5s backwards,
             ${glitchAnimation} 2s ease-in-out 2s infinite;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Dots = styled.span`
  display: inline-block;
  width: 20px;
`;

interface IntroProps {
  onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [dots, setDots] = useState('');
  const { t } = useLanguage();

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4300);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <IntroContainer $isExiting={isExiting}>
      <IntroContent>
        <Logo>RC</Logo>
        <Name>{t.intro.name}</Name>
        <Role>{t.intro.role}</Role>
        <Line />
        <LoadingText>
          {t.intro.loading}<Dots>{dots}</Dots>
        </LoadingText>
      </IntroContent>
    </IntroContainer>
  );
};
