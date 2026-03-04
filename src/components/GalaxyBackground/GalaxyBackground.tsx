import React, { useEffect, useRef } from 'react';
import { Star } from '../../types';

const STAR_COUNT = 900;
const DUST_COUNT = 200;
const MILKY_WAY_COUNT = 600;
const SHOOTING_STAR_INTERVAL = 4000;
const SHOOTING_STAR_INITIAL_DELAY = 1200;

export const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;
    let t = 0;

    canvas.width = width;
    canvas.height = height;

    const starColors = ['#ffffff', '#e8f4ff', '#c8e8ff', '#a0c8ff', '#d0d8ff', '#f0f0ff', '#b8d8ff'];
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() ** 2.5 * 2.8 + 0.2, 
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.4 + 0.05,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }));

    const milkyWay: Star[] = Array.from({ length: MILKY_WAY_COUNT }, () => {
      const t2 = Math.random();
      const cx = width * 0.85 - t2 * width * 1.1;
      const cy = height * 0.05 + t2 * height * 0.9;
      const spread = (Math.random() - 0.5) * height * 0.35;
      const angle = Math.atan2(height * 0.85, -width * 1.1);
      return {
        x: cx + spread * Math.sin(angle),
        y: cy - spread * Math.cos(angle),
        r: Math.random() * 0.9 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.15 + 0.02,
        color: ['#c8deff', '#ddeeff', '#ffffff', '#b8ccff'][Math.floor(Math.random() * 4)],
      };
    });

    const dust: Star[] = Array.from({ length: DUST_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.1 + 0.02,
      color: ['rgba(97,218,251,0.25)', 'rgba(160,140,255,0.2)', 'rgba(200,220,255,0.15)'][
        Math.floor(Math.random() * 3)
      ],
    }));

    function draw() {
      const ctx = canvas!.getContext('2d');
      if (!ctx) return;
      t += 0.007;

      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, '#030610');
      bg.addColorStop(0.45, '#020408');
      bg.addColorStop(1, '#040210');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const n1 = ctx.createRadialGradient(width * 0.12, height * 0.55, 0, width * 0.12, height * 0.55, width * 0.42);
      n1.addColorStop(0,   'rgba(40, 90, 180, 0.18)');
      n1.addColorStop(0.3, 'rgba(30, 65, 140, 0.12)');
      n1.addColorStop(0.7, 'rgba(15, 35,  80, 0.05)');
      n1.addColorStop(1,   'transparent');
      ctx.fillStyle = n1;
      ctx.fillRect(0, 0, width, height);

      const n2 = ctx.createRadialGradient(width * 0.72, height * 0.38, 0, width * 0.72, height * 0.38, width * 0.5);
      n2.addColorStop(0,   'rgba(90, 50, 180, 0.15)');
      n2.addColorStop(0.35,'rgba(70, 35, 140, 0.10)');
      n2.addColorStop(0.7, 'rgba(40, 18,  90, 0.05)');
      n2.addColorStop(1,   'transparent');
      ctx.fillStyle = n2;
      ctx.fillRect(0, 0, width, height);

      const n3 = ctx.createRadialGradient(width * 0.5, height * 0.92, 0, width * 0.5, height * 0.92, width * 0.3);
      n3.addColorStop(0,   'rgba(20, 120, 130, 0.14)');
      n3.addColorStop(0.4, 'rgba(10,  80,  95, 0.08)');
      n3.addColorStop(0.8, 'rgba(0,   40,  60, 0.03)');
      n3.addColorStop(1,   'transparent');
      ctx.fillStyle = n3;
      ctx.fillRect(0, 0, width, height);

      const n4 = ctx.createRadialGradient(width * 0.9, height * 0.1, 0, width * 0.9, height * 0.1, width * 0.28);
      n4.addColorStop(0,   'rgba(60, 140, 220, 0.12)');
      n4.addColorStop(0.5, 'rgba(30,  90, 160, 0.06)');
      n4.addColorStop(1,   'transparent');
      ctx.fillStyle = n4;
      ctx.fillRect(0, 0, width, height);

      for (const s of milkyWay) {
        const alpha = (0.15 + 0.25 * Math.abs(Math.sin(s.phase + t * s.speed)));
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
        ctx.restore();
      }

      for (const d of dust) {
        const alpha = 0.2 + 0.35 * Math.abs(Math.sin(d.phase + t * d.speed));
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.fill();
        ctx.restore();
      }

      for (const s of stars) {
        const alpha = 0.4 + 0.6 * Math.abs(Math.sin(s.phase + t * s.speed));
        ctx.save();
        ctx.globalAlpha = alpha;

        if (s.r > 1.8) {
          const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          halo.addColorStop(0, s.color.replace(')', ', 0.3)').replace('rgb', 'rgba'));
          halo.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.globalAlpha = alpha * 0.4;
          ctx.fill();
        }

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.r > 2 ? 14 : s.r > 1.5 ? 8 : 4;
        ctx.fill();

        if (s.r > 2.2 && alpha > 0.85) {
          const glintLen = s.r * 8;
          ctx.globalAlpha = alpha * 0.35;
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(s.x - glintLen, s.y);
          ctx.lineTo(s.x + glintLen, s.y);
          ctx.moveTo(s.x, s.y - glintLen * 0.6);
          ctx.lineTo(s.x, s.y + glintLen * 0.6);
          ctx.stroke();
        }

        ctx.restore();
      }

      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.25,
        width / 2, height / 2, height * 0.92
      );
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.55)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(draw);
    }

    draw();

    function shootingStar() {
      const el = document.createElement('div');
      el.className = 'shooting-star';
      const startX = 20 + Math.random() * 65;
      const startY = Math.random() * 50;
      el.style.cssText = `top:${startY}%;left:${startX}%;`;
      document.body.appendChild(el);

      const angle = (Math.random() * 25 + 15) * (Math.PI / 180);
      const dist = 400 + Math.random() * 350;
      const duration = 900 + Math.random() * 500;

      el.animate(
        [
          { transform: `translate(0,0) rotate(${(angle * 180) / Math.PI}deg)`, opacity: '0' },
          {
            transform: `translate(${dist * 0.25 * Math.cos(angle)}px, ${dist * 0.25 * Math.sin(angle)}px) rotate(${(angle * 180) / Math.PI}deg)`,
            opacity: '1',
            offset: 0.12,
          },
          {
            transform: `translate(${dist * Math.cos(angle)}px, ${dist * Math.sin(angle)}px) rotate(${(angle * 180) / Math.PI}deg)`,
            opacity: '0',
          },
        ],
        { duration, easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)', fill: 'forwards' }
      ).onfinish = () => el.remove();
    }

    const shootInterval = window.setInterval(shootingStar, SHOOTING_STAR_INTERVAL);
    const shootTimeout  = window.setTimeout(shootingStar, SHOOTING_STAR_INITIAL_DELAY);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      window.clearInterval(shootInterval);
      window.clearTimeout(shootTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', height: '100dvh' }}
    />
  );
};
