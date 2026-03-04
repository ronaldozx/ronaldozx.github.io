import React from 'react';
import { ScrollReveal } from '../../components';
import {
  EducationSection,
  EducationContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  Timeline,
  TimelineItem,
  EducationCard,
  CardTop,
  InstitutionName,
  StatusBadge,
  CourseName,
  Period,
  CardDescription,
} from './Education.styles';

interface EducationEntry {
  institution: string;
  course: string;
  period: string;
  status: 'cursando' | 'concluído' | 'trancado';
  description: string;
}

const educationData: EducationEntry[] = [
  { 
    institution: 'UNIP — Universidade Paulista',
    course: 'Ciência da Computação (Bacharelado)',
    period: '2023 — 2026',
    status: 'cursando',
    description:
        'Curso superior de bacharelado com foco em fundamentos teóricos e práticos da computação, algoritmos, estruturas de dados, inteligência artificial e desenvolvimento de software. Participação em projetos acadêmicos usando Python, Java e C++.',
  },
  {
    institution: 'FIAP',
    course: 'Análise e Desenvolvimento de Sistemas (ADS)',
    period: '2023 — 2024',
    status: 'concluído',
    description:
      'Curso superior de tecnologia com ênfase em desenvolvimento de software, lógica de programação, banco de dados e metodologias ágeis. Desenvolvimento de projetos práticos usando Java, Spring Boot e React.',
  },
  {
    institution: 'ETEC — Escola Técnica Estadual de SP',
    course: 'Técnico em Desenvolvimento de Sistemas',
    period: '2021 — 2022',
    status: 'concluído',
    description:
      'Curso técnico com base sólida em lógica de programação, HTML, CSS, JavaScript, Java, PHP e banco de dados relacional. Desenvolvimento de projetos web completos do zero ao deploy.',
  },
];

export const Education: React.FC = () => {
  return (
    <EducationSection id="formacao">
      <EducationContainer>
        <ScrollReveal animation="fadeInUp">
          <SectionHeader>
            <SectionTitle>Formação Acadêmica</SectionTitle>
            <SectionSubtitle>
              Minha trajetória educacional na área de tecnologia
            </SectionSubtitle>
          </SectionHeader>
        </ScrollReveal>

        <Timeline>
          {educationData.map((entry, index) => (
            <TimelineItem key={index}>
              <ScrollReveal animation="fadeInLeft" delay={index * 0.15}>
                <EducationCard>
                  <CardTop>
                    <InstitutionName>{entry.institution}</InstitutionName>
                    <StatusBadge $status={entry.status}>{entry.status}</StatusBadge>
                  </CardTop>
                  <CourseName>{entry.course}</CourseName>
                  <Period>{entry.period}</Period>
                  <CardDescription>{entry.description}</CardDescription>
                </EducationCard>
              </ScrollReveal>
            </TimelineItem>
          ))}
        </Timeline>
      </EducationContainer>
    </EducationSection>
  );
};
