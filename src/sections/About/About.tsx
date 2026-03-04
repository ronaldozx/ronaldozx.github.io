import React from 'react';
import { ScrollReveal } from '../../components';
import { useLanguage } from '../../i18n/LanguageContext';
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
  const { t } = useLanguage();

  return (
    <AboutSection id="sobre">
      <AboutContainer>
        <ScrollReveal animation="fadeInLeft">
          <AboutImageContainer>
            <AboutImage src={imageUrl} alt={t.about.title} />
          </AboutImageContainer>
        </ScrollReveal>
        <AboutContent>
          <ScrollReveal animation="fadeInRight" delay={0.2}>
            <SectionTitle>{t.about.title}</SectionTitle>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={0.3}>
            <AboutText
              dangerouslySetInnerHTML={{
                __html: t.about.paragraph1
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={0.4}>
            <AboutText
              dangerouslySetInnerHTML={{
                __html: t.about.paragraph2
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={0.5}>
            <AboutText>{t.about.paragraph3}</AboutText>
          </ScrollReveal>
          <ScrollReveal animation="fadeInUp" delay={0.6}>
            <StatsContainer>
              <StatCard>
                <StatNumber>1+</StatNumber>
                <StatLabel>{t.about.experience}</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>5</StatNumber>
                <StatLabel>{t.about.projects}</StatLabel>
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
