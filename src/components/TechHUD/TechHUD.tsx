import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;
const rotateReverse = keyframes`from { transform: rotate(360deg); } to { transform: rotate(0deg); }`;
const pulse = keyframes`0%,100% { opacity: 1; } 50% { opacity: 0.4; }`;
const scanMove = keyframes`0% { top: 0%; opacity: 0.9; } 100% { top: 100%; opacity: 0; }`;
const blink = keyframes`0%,100% { opacity: 1; } 49% { opacity: 1; } 50% { opacity: 0; } 99% { opacity: 0; }`;
const fillBar = keyframes`from { width: 0%; } to { width: var(--fill); }`;
const fadeIn = keyframes`from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; }`;
const ping = keyframes`
  0%   { transform: scale(1);   opacity: 0.7; }
  70%  { transform: scale(2.2); opacity: 0;   }
  100% { transform: scale(2.2); opacity: 0;   }
`;
const glitch = keyframes`
  0%,94%,100% { clip-path: none; transform: none; }
  95% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translateX(-3px); }
  97% { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); transform: translateX(3px); }
`;

const Wrapper = styled.div`
  position: relative;
  width: 580px;
  height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 968px) {
    width: 300px;
    height: 300px;
  }
`;

const Ring = styled.div<{ $size: number; $dur: string; $color: string; $reverse?: boolean; $dash?: boolean }>`
  position: absolute;
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  border-top-color: ${p => p.$color};
  border-right-color: ${p => p.$color}55;
  ${p => p.$dash ? css`border-style: dashed;` : ''}
  animation: ${p => p.$reverse ? rotateReverse : rotate} ${p => p.$dur} linear infinite;
  box-shadow: 0 0 8px ${p => p.$color}44;
`;

const OrbitWrapper = styled.div<{ $dur: string; $reverse?: boolean }>`
  position: absolute;
  width: 0; height: 0;
  top: 50%; left: 50%;
  animation: ${p => p.$reverse ? rotateReverse : rotate} ${p => p.$dur} linear infinite;
`;

const OrbitDot = styled.div<{ $color: string; $radius: number }>`
  position: absolute;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: ${p => p.$color};
  box-shadow: 0 0 10px ${p => p.$color}, 0 0 20px ${p => p.$color}88;
  transform: translate(${p => p.$radius}px, -3px);
`;

const Scanner = styled.div<{ $color: string }>`
  position: absolute;
  left: 10%;
  right: 10%;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, ${p => p.$color}cc, transparent);
  animation: ${scanMove} 3s ease-in-out infinite;
  pointer-events: none;
`;

const Center = styled.div`
  position: relative;
  z-index: 10;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, rgba(97,218,251,0.12), rgba(5,8,20,0.95) 70%);
  border: 1.5px solid rgba(97,218,251,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 28px rgba(97,218,251,0.25),
    0 0 70px rgba(97,218,251,0.10),
    inset 0 0 24px rgba(97,218,251,0.06);
`;

const Initials = styled.span`
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: 3px;
  color: #61dafb;
  text-shadow: 0 0 20px rgba(97,218,251,0.8), 0 0 40px rgba(97,218,251,0.4);
  animation: ${glitch} 8s infinite;
`;

const CenterLabel = styled.span`
  font-size: 0.52rem;
  letter-spacing: 3px;
  color: rgba(97,218,251,0.6);
  text-transform: uppercase;
  margin-top: 4px;
`;

const PingRing = styled.div`
  position: absolute;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  border: 1px solid rgba(97,218,251,0.5);
  animation: ${ping} 3s ease-out infinite;
  z-index: 9;
`;

const Corner = styled.div<{ $pos: string }>`
  position: absolute;
  width: 30px;
  height: 30px;
  ${p => {
    switch(p.$pos) {
      case 'tl': return 'top:0;left:0;border-top:2px solid #61dafb;border-left:2px solid #61dafb;';
      case 'tr': return 'top:0;right:0;border-top:2px solid #61dafb;border-right:2px solid #61dafb;';
      case 'bl': return 'bottom:0;left:0;border-bottom:2px solid #61dafb;border-left:2px solid #61dafb;';
      case 'br': return 'bottom:0;right:0;border-bottom:2px solid #61dafb;border-right:2px solid #61dafb;';
      default: return '';
    }
  }}
  animation: ${pulse} 2.5s ease-in-out infinite;
`;

const Panel = styled.div<{ $side: 'left' | 'right'; $delay?: string }>`
  position: absolute;
  ${p => p.$side === 'left' ? 'left: -8px; transform: translateX(-100%);' : 'right: -8px; transform: translateX(100%);'}
  top: 50%;
  transform: ${p => p.$side === 'left' ? 'translateX(-100%) translateY(-50%)' : 'translateX(100%) translateY(-50%)'};
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${fadeIn} 0.8s ease ${p => p.$delay ?? '0s'} both;
`;

const DataRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 135px;
`;

const DataLabel = styled.span`
  font-size: 0.62rem;
  letter-spacing: 2px;
  color: rgba(97,218,251,0.55);
  text-transform: uppercase;
`;

const BarTrack = styled.div`
  height: 4px;
  background: rgba(97,218,251,0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const BarFill = styled.div<{ $pct: number; $color: string; $delay: string }>`
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, ${p => p.$color}, ${p => p.$color}aa);
  box-shadow: 0 0 8px ${p => p.$color}88;
  --fill: ${p => p.$pct}%;
  width: 0%;
  animation: ${fillBar} 1.5s cubic-bezier(0.16,1,0.3,1) ${p => p.$delay} forwards;
`;

const DataVal = styled.span`
  font-size: 0.65rem;
  font-family: 'Courier New', monospace;
  color: rgba(255,255,255,0.7);
  text-align: right;
`;

const StatusRow = styled.div`
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const Badge = styled.div<{ $color: string; $delay: string }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.58rem;
  letter-spacing: 1.5px;
  color: ${p => p.$color}cc;
  text-transform: uppercase;
  animation: ${fadeIn} 0.6s ease ${p => p.$delay} both;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${p => p.$color};
    box-shadow: 0 0 6px ${p => p.$color};
    animation: ${pulse} 2s ease-in-out infinite;
    flex-shrink: 0;
  }
`;

interface TickProps { target: number; duration?: number; suffix?: string }
const Tick: React.FC<TickProps> = ({ target, duration = 1400, suffix = '' }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return <>{val}{suffix}</>;
};

const Cursor = styled.span`
  animation: ${blink} 1s step-end infinite;
  color: #61dafb;
  font-family: monospace;
`;

const leftData = [
  { label: 'React.js',    pct: 80, color: '#61dafb', delay: '0.4s' },
  { label: 'Angular',     pct: 75, color: '#dd3333', delay: '0.6s' },
  { label: 'TypeScript',  pct: 70, color: '#3178c6', delay: '0.8s' },
];

const rightData = [
  { label: 'Laravel',     pct: 80, color: '#ff4438', delay: '0.5s' },
  { label: 'Spring Boot', pct: 75, color: '#6db33f', delay: '0.7s' },
  { label: 'Git',         pct: 85, color: '#f05032', delay: '0.9s' },
];

export const TechHUD: React.FC = () => (
  <Wrapper>
    <Corner $pos="tl" />
    <Corner $pos="tr" />
    <Corner $pos="bl" />
    <Corner $pos="br" />

    <Scanner $color="#61dafb" />

    <Ring $size={450} $dur="40s"  $color="rgba(97,218,251,0.18)" />
    <Ring $size={400} $dur="25s"  $color="rgba(97,218,251,0.25)" $reverse />
    <Ring $size={330} $dur="18s"  $color="rgba(161,143,255,0.3)" />
    <Ring $size={265} $dur="12s"  $color="rgba(97,218,251,0.4)"  $reverse />
    <Ring $size={200} $dur="8s"   $color="rgba(97,218,251,0.6)" />

    <Ring $size={425} $dur="60s"  $color="rgba(97,218,251,0.12)" $dash />

    <OrbitWrapper $dur="8s">
      <OrbitDot $color="#61dafb" $radius={100} />
    </OrbitWrapper>
    <OrbitWrapper $dur="12s" $reverse>
      <OrbitDot $color="#a18fff" $radius={132} />
    </OrbitWrapper>
    <OrbitWrapper $dur="18s">
      <OrbitDot $color="#61dafb" $radius={165} />
    </OrbitWrapper>

    <PingRing />

    <Center>
      <Initials>RC</Initials>
      <CenterLabel>dev<Cursor>_</Cursor></CenterLabel>
    </Center>

    <Panel $side="left" $delay="0.2s">
      {leftData.map(d => (
        <DataRow key={d.label}>
          <DataLabel>{d.label}</DataLabel>
          <BarTrack>
            <BarFill $pct={d.pct} $color={d.color} $delay={d.delay} />
          </BarTrack>
          <DataVal><Tick target={d.pct} suffix="%" /></DataVal>
        </DataRow>
      ))}
    </Panel>

    <Panel $side="right" $delay="0.3s">
      {rightData.map(d => (
        <DataRow key={d.label}>
          <DataLabel>{d.label}</DataLabel>
          <BarTrack>
            <BarFill $pct={d.pct} $color={d.color} $delay={d.delay} />
          </BarTrack>
          <DataVal><Tick target={d.pct} suffix="%" /></DataVal>
        </DataRow>
      ))}
    </Panel>

    <StatusRow>
      <Badge $color="#61dafb" $delay="1s">online</Badge>
      <Badge $color="#6db33f" $delay="1.2s">full stack</Badge>
      <Badge $color="#a18fff" $delay="1.4s">jr dev</Badge>
    </StatusRow>
  </Wrapper>
);
