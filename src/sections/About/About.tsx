import React from 'react';
import { ScrollReveal } from '../../components';
import {
  AboutSection,
  AboutContainer,
  AboutImageContainer,
  AboutImage,
  AboutContent,
  SectionTitle,
  AboutText,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
} from './About.styles';

interface AboutProps {
  imageUrl?: string;
}

export const About: React.FC<AboutProps> = ({ imageUrl = '/eu.jpg' }) => {
  return (
    <AboutSection id="sobre">
      <AboutContainer>
        <ScrollReveal animation="fadeInLeft">
          <AboutImageContainer>
            <AboutImage src={imageUrl} alt="Sobre mim" />
          </AboutImageContainer>
        </ScrollReveal>
        <AboutContent>
          <ScrollReveal animation="fadeInRight" delay={0.2}>
            <SectionTitle>Sobre Mim</SectionTitle>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={0.3}>
            <AboutText>
              Olá! Sou <strong>Ronaldo César Del Papa Bofe</strong>, um <strong>Desenvolvedor Web Junior</strong> com 1 ano de experiência
              criando soluções web modernas e eficientes. Minha maior característica? Sou <strong>extremamente rápido em aprender</strong> novas
              tecnologias e frameworks.
            </AboutText>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={0.4}>
            <AboutText>
              Durante minha jornada, trabalhei com <strong>Laravel</strong>, <strong>Angular</strong>, <strong>React.js</strong> e <strong>Java Spring Boot</strong>,
              sempre buscando dominar cada stack que me proponho. Sou reconhecido por ser <strong>muito esforçado</strong> e dedicado,
              entregando projetos com qualidade e atenção aos detalhes.
            </AboutText>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={0.5}>
            <AboutText>
              Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
              Acredito que a combinação de dedicação, capacidade de aprendizado rápido e paixão por tecnologia
              são os pilares para um desenvolvedor de sucesso.
            </AboutText>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={0.6}>
            <StatsContainer>
              <StatCard>
                <StatNumber>1+</StatNumber>
                <StatLabel>Ano de Experiência</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>4</StatNumber>
                <StatLabel>Stacks Dominadas</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>100%</StatNumber>
                <StatLabel>Dedicação</StatLabel>
              </StatCard>
            </StatsContainer>
          </ScrollReveal>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};
