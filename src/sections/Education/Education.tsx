import React from 'react';
import { ScrollReveal } from '../../components';
import { useLanguage } from '../../i18n/LanguageContext';
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

export const Education: React.FC = () => {
  const { t } = useLanguage();

  const institutionsList: EducationEntry[] = [
    {
      institution: t.education.institutions.unip.name,
      course: t.education.institutions.unip.course,
      period: t.education.institutions.unip.period,
      status: t.education.institutions.unip.status.toLowerCase() as any,
      description: t.education.institutions.unip.description,
    },
    {
      institution: t.education.institutions.fiap.name,
      course: t.education.institutions.fiap.course,
      period: t.education.institutions.fiap.period,
      status: t.education.institutions.fiap.status.toLowerCase() as any,
      description: t.education.institutions.fiap.description,
    },
    {
      institution: t.education.institutions.etec.name,
      course: t.education.institutions.etec.course,
      period: t.education.institutions.etec.period,
      status: t.education.institutions.etec.status.toLowerCase() as any,
      description: t.education.institutions.etec.description,
    },
  ];

  return (
    <EducationSection id="formacao">
      <EducationContainer>
        <ScrollReveal animation="fadeInUp">
          <SectionHeader>
            <SectionTitle>{t.education.title}</SectionTitle>
            <SectionSubtitle>{t.education.subtitle}</SectionSubtitle>
          </SectionHeader>
        </ScrollReveal>

        <Timeline>
          {institutionsList.map((entry, index) => (
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
