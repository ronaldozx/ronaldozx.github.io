import React from 'react';
import { FaCode, FaServer, FaTools, FaRocket } from 'react-icons/fa';
import { ScrollReveal } from '../../components';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  SkillsSection,
  SkillsContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  SkillsGrid,
  SkillCategory,
  CategoryIcon,
  CategoryTitle,
  SkillsList,
  SkillItem,
  SkillName,
  SkillLevel,
  SkillBar,
  SkillProgress,
} from './Skills.styles';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryData {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories: SkillCategoryData[] = [
    {
      icon: <FaCode size={28} color="#61dafb" />,
      title: t.skills.frontend,
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Angular', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML5 & CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      icon: <FaServer size={28} color="#61dafb" />,
      title: t.skills.backend,
      skills: [
        { name: 'Java Spring Boot', level: 75 },
        { name: 'Laravel (PHP)', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'RESTful APIs', level: 75 },
        { name: 'SQL', level: 70 },
      ],
    },
    {
      icon: <FaTools size={28} color="#61dafb" />,
      title: t.skills.tools,
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 75 },
        { name: 'Docker', level: 60 },
        { name: 'Linux', level: 65 },
      ],
    },
    {
      icon: <FaRocket size={28} color="#61dafb" />,
      title: t.skills.others,
      skills: [
        { name: 'Aprendizado Rápido', level: 95 },
        { name: 'Dedicação', level: 95 },
        { name: 'Trabalho em Equipe', level: 85 },
        { name: 'Resolução de Problemas', level: 80 },
        { name: 'Comunicação', level: 80 },
      ],
    },
  ];

  return (
    <SkillsSection id="habilidades">
      <SkillsContainer>
        <ScrollReveal animation="fadeInUp">
          <SectionHeader>
            <SectionTitle>{t.skills.title}</SectionTitle>
            <SectionSubtitle>{t.skills.subtitle}</SectionSubtitle>
          </SectionHeader>
        </ScrollReveal>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <ScrollReveal
              key={category.title}
              animation="scaleIn"
              delay={0.1 * index}
            >
              <SkillCategory>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
                <SkillsList>
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <SkillItem>
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel>{skill.level}%</SkillLevel>
                      </SkillItem>
                      <SkillBar>
                        <SkillProgress level={skill.level} />
                      </SkillBar>
                    </div>
                  ))}
                </SkillsList>
              </SkillCategory>
            </ScrollReveal>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};
