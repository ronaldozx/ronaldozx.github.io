import { PersonalInfo, SocialLink, NavItem } from '../types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const personalInfo: PersonalInfo = {
  greeting: 'OLÁ, EU SOU',
  name: 'Ronaldo César',
  lastName: 'Del Papa Bofe',
  role: 'Desenvolvedor Web Junior',
  resumeUrl: '/curriculo.pdf',
  imageUrl: '/eu.png',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ronaldozx',
    icon: FaGithub,
    ariaLabel: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ronaldo-c%C3%A9sar/',
    icon: FaLinkedin,
    ariaLabel: 'linkedin',
  },
];

export const navItems: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'SOBRE', href: '#sobre' },
  { label: 'FORMAÇÃO', href: '#formacao' },
  { label: 'CURSOS', href: '#cursos' },
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'CONTATO', href: '#contato' },
];
