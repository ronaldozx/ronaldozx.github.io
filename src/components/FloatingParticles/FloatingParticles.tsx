import React from 'react';
import styled, { keyframes } from 'styled-components';

const float1 = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  25% {
    transform: translate(30px, -30px) rotate(90deg);
    opacity: 0.7;
  }
  50% {
    transform: translate(-20px, -60px) rotate(180deg);
    opacity: 0.5;
  }
  75% {
    transform: translate(-40px, -30px) rotate(270deg);
    opacity: 0.8;
  }
`;

const float2 = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  33% {
    transform: translate(-40px, 40px) scale(1.2);
    opacity: 0.6;
  }
  66% {
    transform: translate(40px, -40px) scale(0.8);
    opacity: 0.5;
  }
`;

const float3 = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(20px, -50px) rotate(180deg) scale(1.3);
    opacity: 0.8;
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: visible;
  z-index: 0;
`;

const Particle = styled.div<{ 
  size: number; 
  top: string; 
  left: string; 
  delay: string;
  animation: string;
  color: string;
}>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top};
  left: ${props => props.left};
  border-radius: 50%;
  background: ${props => props.color};
  filter: blur(${props => props.size > 80 ? 40 : props.size > 50 ? 20 : 10}px);
  animation: ${props => {
    switch(props.animation) {
      case 'float1': return float1;
      case 'float2': return float2;
      case 'float3': return float3;
      default: return float1;
    }
  }} ${props => 8 + Math.random() * 8}s ease-in-out ${props => props.delay} infinite;
  opacity: 0.4;
`;

const particles = [
  { size: 100, top: '10%', left: '15%', delay: '0s', animation: 'float1', color: 'rgba(97, 218, 251, 0.4)' },
  { size: 80, top: '60%', left: '80%', delay: '2s', animation: 'float2', color: 'rgba(161, 143, 255, 0.5)' },
  { size: 120, top: '40%', left: '5%', delay: '4s', animation: 'float3', color: 'rgba(255, 97, 216, 0.3)' },
  { size: 60, top: '80%', left: '70%', delay: '1s', animation: 'float1', color: 'rgba(97, 218, 251, 0.6)' },
  { size: 90, top: '25%', left: '85%', delay: '3s', animation: 'float2', color: 'rgba(161, 143, 255, 0.4)' },
  { size: 70, top: '70%', left: '20%', delay: '5s', animation: 'float3', color: 'rgba(255, 97, 216, 0.5)' },
  { size: 50, top: '15%', left: '50%', delay: '2.5s', animation: 'float1', color: 'rgba(97, 218, 251, 0.5)' },
  { size: 85, top: '50%', left: '90%', delay: '4.5s', animation: 'float2', color: 'rgba(161, 143, 255, 0.3)' },
];

export const FloatingParticles: React.FC = () => {
  return (
    <ParticlesContainer>
      {particles.map((particle, index) => (
        <Particle
          key={index}
          size={particle.size}
          top={particle.top}
          left={particle.left}
          delay={particle.delay}
          animation={particle.animation}
          color={particle.color}
        />
      ))}
    </ParticlesContainer>
  );
};
