import React from 'react';
import { FaShieldAlt, FaCar, FaDragon, FaEnvelope, FaUsers } from 'react-icons/fa';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ScrollReveal } from '../../components';
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

const projects: Project[] = [
  {
    id: 1,
    title: 'Dorothy',
    description:
      'Projeto feito durante o curso técnico na ETEC, voltado para ajudar mulheres e pessoas do grupo LGBTQIA+. Desenvolvido com Java e Firebase como banco de dados.',
    icon: <FaShieldAlt size={40} color="#a78bfa" />,
    tags: ['Java', 'Firebase', 'Android'],
    githubUrl: 'https://github.com/ronaldozx/Aplicativo-Contra-Viol-ncia-Domestica-e-Viol-ncia-Contra-LGBTQIA-',
  },
  {
    id: 2,
    title: 'EasyCarros',
    description:
      'Desenvolvido no primeiro semestre da faculdade de ADS em parceria com a empresa BRQ. Alcancei o 4º lugar entre 250 projetos na competição. Desenvolvido em HTML, CSS e JavaScript.',
    icon: <FaCar size={40} color="#61dafb" />,
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ronaldozx/Projeto-Next-FIAP',
  },
  {
    id: 3,
    title: 'RPG em Texto',
    description:
      'Projeto desenvolvido em C++ no curso técnico da ETEC. Um RPG em texto onde o personagem é criado aleatoriamente e o final da história muda de acordo com as escolhas do jogador.',
    icon: <FaDragon size={40} color="#f34f29" />,
    tags: ['C++', 'Terminal', 'Lógica'],
    githubUrl: 'https://github.com/ronaldozx/rpgEmTexto',
  },
  {
    id: 4,
    title: 'App Email LocaWeb',
    description:
      'Realizado durante a faculdade de ADS, desenvolvi um app de e-mail para a empresa LocaWeb utilizando Kotlin com Jetpack Compose e Firebase como banco de dados.',
    icon: <FaEnvelope size={40} color="#f7df1e" />,
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    githubUrl: 'https://github.com/ronaldozx/App-LocaWeb-Email',
  },
  {
    id: 5,
    title: 'Dev Cadastro',
    description:
      'Sistema de cadastro em React.js com criação, edição e remoção de usuários. Inclui lista dinâmica e modal para adicionar ou editar informações.',
    icon: <FaUsers size={40} color="#68a063" />,
    tags: ['React.js', 'JavaScript', 'CRUD'],
    githubUrl: 'https://github.com/ronaldozx/Sistema-de-Cadastro-React'
  },
];

export const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projetos">
      <ProjectsContainer>
        <ScrollReveal animation="fadeInUp">
          <SectionHeader>
            <SectionTitle>Projetos em Destaque</SectionTitle>
            <SectionSubtitle>
              Alguns dos projetos mais interessantes que desenvolvi
            </SectionSubtitle>
          </SectionHeader>
        </ScrollReveal>
        <ProjectsGrid>
          {projects.map((project, index) => (
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
                      <FaExternalLinkAlt size={13} /> Ver Projeto
                    </ProjectLink>
                  )}
                  {project.githubUrl && (
                    <ProjectLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary"
                    >
                      <FaGithub size={14} /> Código
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
