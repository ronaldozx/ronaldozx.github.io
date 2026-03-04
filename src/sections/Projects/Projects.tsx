import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ScrollReveal } from '../../components';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  ProjectsSection,
  ProjectsContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImageContainer,
  ProjectImage,
  ProjectImagePlaceholder,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectLinks,
  ProjectLink,
} from './Projects.styles';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projectsData: Project[] = [
    {
      id: 1,
      title: t.projects.items.dorothy.title,
      description: t.projects.items.dorothy.description,
      image: '/projetoDorothy.png',
      tags: ['Java', 'Firebase', 'Android'],
      githubUrl: 'https://github.com/ronaldozx/Aplicativo-Contra-Viol-ncia-Domestica-e-Viol-ncia-Contra-LGBTQIA-',
    },
    {
      id: 2,
      title: t.projects.items.easyCarros.title,
      description: t.projects.items.easyCarros.description,
      image: '/projetoCarros.PNG',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/ronaldozx/Projeto-Next-FIAP',
    },
    {
      id: 3,
      title: t.projects.items.rpg.title,
      description: t.projects.items.rpg.description,
      image: '/rpgTxt.PNG',
      tags: ['C++', 'Terminal', 'Lógica'],
      githubUrl: 'https://github.com/ronaldozx/rpgEmTexto',
    },
    {
      id: 4,
      title: t.projects.items.locaWeb.title,
      description: t.projects.items.locaWeb.description,
      image: '/AppLocaWeb.PNG',
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
      githubUrl: 'https://github.com/ronaldozx/App-LocaWeb-Email',
    },
    {
      id: 5,
      title: t.projects.items.cadastro.title,
      description: t.projects.items.cadastro.description,
      image: '/cadastroReact.PNG',
      tags: ['React.js', 'JavaScript', 'CRUD'],
      githubUrl: 'https://github.com/ronaldozx/Sistema-de-Cadastro-React'
    },
  ];

  return (
    <ProjectsSection id="projetos">
      <ProjectsContainer>
        <ScrollReveal animation="fadeInUp">
          <SectionHeader>
            <SectionTitle>{t.projects.title}</SectionTitle>
            <SectionSubtitle>{t.projects.subtitle}</SectionSubtitle>
          </SectionHeader>
        </ScrollReveal>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="scaleIn"
              delay={0.1 * (index % 3)}
            >
              <ProjectCard>
              <ProjectImageContainer>
                {project.image ? (
                  <ProjectImage src={project.image} alt={project.title} />
                ) : (
                  <ProjectImagePlaceholder>{project.icon}</ProjectImagePlaceholder>
                )}
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <ProjectTag key={tag}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.liveUrl && (
                    <ProjectLink
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary"
                    >
                      <FaExternalLinkAlt size={13} /> {t.projects.viewProject}
                    </ProjectLink>
                  )}
                  {project.githubUrl && (
                    <ProjectLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary"
                    >
                      <FaGithub size={14} /> {t.projects.code}
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          </ScrollReveal>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};
