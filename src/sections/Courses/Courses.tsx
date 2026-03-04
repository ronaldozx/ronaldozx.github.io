import React from 'react';
import {
  FaSitemap,
  FaPaintBrush,
  FaJs,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaLayerGroup,
} from 'react-icons/fa';
import { ScrollReveal } from '../../components';
import {
  CoursesSection,
  CoursesContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  CoursesGrid,
  CourseCard,
  CardHeader,
  PlatformIcon,
  CardMeta,
  Platform,
  CourseTitle,
  CourseDuration,
  TagsRow,
  Tag,
  CertificateBadge,
} from './Courses.styles';

interface Course {
  icon: React.ReactNode;
  platform: string;
  title: string;
  duration: string;
  tags: { label: string; color: string }[];
  certificateUrl: string;
  iconColor: string;
}

const coursesData: Course[] = [
  {
    icon: <FaSitemap size={22} color="#dd1b16" />,
    platform: 'FIAP',
    title: 'Certificado de Qualificação Profissional em Análise de Sistemas e Prototipagem Web',
    duration: '',
    tags: [
      { label: 'Análise de Sistemas', color: '#dd1b16' },
      { label: 'Prototipagem', color: '#ff6b6b' },
      { label: 'UX/UI', color: '#ffa07a' },
    ],
    certificateUrl: 'https://on1.fiap.com.br/updown/DocumentosAssinados/e6c2082a-aa38-44ae-9e8c-64e6c7c0b0d7.pdf',
    iconColor: '#dd1b16',
  },
  {
    icon: <FaPaintBrush size={22} color="#dd1b16" />,
    platform: 'FIAP',
    title: 'Certificado de Qualificação Profissional em Análise e Design Web 2.0',
    duration: '',
    tags: [
      { label: 'Design Web', color: '#dd1b16' },
      { label: 'HTML', color: '#e34c26' },
      { label: 'CSS', color: '#264de4' },
    ],
    certificateUrl: 'https://on1.fiap.com.br/updown/DocumentosAssinados/7f68b877-4ad8-46e8-9e1f-4e3055f59b25.pdf',
    iconColor: '#dd1b16',
  },
  {
    icon: <FaJs size={22} color="#f7df1e" />,
    platform: 'Alura',
    title: 'JavaScript: explorando a linguagem',
    duration: '10h',
    tags: [
      { label: 'JavaScript', color: '#f7df1e' },
    ],
    certificateUrl: 'https://cursos.alura.com.br/certificate/619b55e5-6db4-40a5-a674-a91ff3c7873d?lang',
    iconColor: '#f7df1e',
  },
  {
    icon: <FaGitAlt size={22} color="#f34f29" />,
    platform: 'Alura',
    title: 'Git e GitHub: repositório, commit e versões',
    duration: '8h',
    tags: [
      { label: 'Git', color: '#f34f29' },
      { label: 'GitHub', color: '#e2e8f0' },
      { label: 'Versionamento', color: '#a78bfa' },
    ],
    certificateUrl: 'https://cursos.alura.com.br/certificate/8cd3e706-4aee-42db-991b-1cdcf917a6af?lang',
    iconColor: '#f34f29',
  },
  {
    icon: <FaReact size={22} color="#61dafb" />,
    platform: 'Alura',
    title: 'React: comece seu projeto full stack',
    duration: '8h',
    tags: [
      { label: 'React', color: '#61dafb' },
      { label: 'Full Stack', color: '#a78bfa' },
    ],
    certificateUrl: 'https://cursos.alura.com.br/certificate/8cd3e706-4aee-42db-991b-1cdcf917a6af?lang',
    iconColor: '#61dafb',
  },
  {
    icon: <FaNodeJs size={22} color="#68a063" />,
    platform: 'Alura',
    title: 'Node.js: continue seu projeto full stack criando uma API com Express',
    duration: '8h',
    tags: [
      { label: 'Node.js', color: '#68a063' },
      { label: 'Express', color: '#aaaaaa' },
      { label: 'API REST', color: '#f7df1e' },
    ],
    certificateUrl: 'https://cursos.alura.com.br/user/bofe-ronaldo18/course/node-primeira-api-express/certificate',
    iconColor: '#68a063',
  },
  {
    icon: <FaLayerGroup size={22} color="#61dafb" />,
    platform: 'Alura',
    title: 'React e Node.js: consumindo APIs no React no projeto full stack',
    duration: '8h',
    tags: [
      { label: 'React', color: '#61dafb' },
      { label: 'Node.js', color: '#68a063' },
      { label: 'API REST', color: '#f7df1e' },
      { label: 'Full Stack', color: '#a78bfa' },
    ],
    certificateUrl: 'https://cursos.alura.com.br/user/bofe-ronaldo18/course/react-node-consumindo-apis-react/certificate',
    iconColor: '#61dafb',
  },
];

export const Courses: React.FC = () => {
  return (
    <CoursesSection id="cursos">
      <CoursesContainer>
        <ScrollReveal animation="fadeInUp">
          <SectionHeader>
            <SectionTitle>Cursos & Certificações</SectionTitle>
            <SectionSubtitle>
              Aprendizado contínuo nas tecnologias que utilizo no dia a dia
            </SectionSubtitle>
          </SectionHeader>
        </ScrollReveal>

        <CoursesGrid>
          {coursesData.map((course, index) => (
            <ScrollReveal
              key={index}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <CourseCard>
                <CardHeader>
                  <PlatformIcon $color={course.iconColor}>
                    {course.icon}
                  </PlatformIcon>
                  <CardMeta>
                    <Platform>{course.platform}</Platform>
                    <CourseTitle>{course.title}</CourseTitle>
                  </CardMeta>
                </CardHeader>

                <CourseDuration>⏱ {course.duration} de conteúdo</CourseDuration>

                <TagsRow>
                  {course.tags.map((tag) => (
                    <Tag key={tag.label} $color={tag.color}>
                      {tag.label}
                    </Tag>
                  ))}
                </TagsRow>

                <CertificateBadge
                  href={course.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   Ver Certificado
                </CertificateBadge>
              </CourseCard>
            </ScrollReveal>
          ))}
        </CoursesGrid>
      </CoursesContainer>
    </CoursesSection>
  );
};
