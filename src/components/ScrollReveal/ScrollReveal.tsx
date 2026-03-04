import React, { ReactNode } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useScrollReveal } from '../../hooks';

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

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

interface RevealWrapperProps {
  $isVisible: boolean;
  $animation: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  $delay: number;
  $duration: number;
}

const RevealWrapper = styled.div<RevealWrapperProps>`
  opacity: 0;
  
  ${({ $isVisible, $animation, $delay, $duration }) =>
    $isVisible &&
    css`
      animation: ${
        $animation === 'fadeInUp'
          ? fadeInUp
          : $animation === 'fadeInLeft'
          ? fadeInLeft
          : $animation === 'fadeInRight'
          ? fadeInRight
          : scaleIn
      } ${$duration}s cubic-bezier(0.16, 1, 0.3, 1) ${$delay}s forwards;
    `}
`;

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollReveal({ threshold });

  return (
    <RevealWrapper
      ref={elementRef}
      $isVisible={isVisible}
      $animation={animation}
      $delay={delay}
      $duration={duration}
    >
      {children}
    </RevealWrapper>
  );
};
