import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLogo,
  FooterDescription,
  FooterTitle,
  FooterLinks,
  FooterLink,
  SocialLinks,
  SocialLink,
  FooterBottom,
} from './Footer.styles';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>Ronaldo César</FooterLogo>
          <FooterDescription>
            Desenvolvedor Full Stack apaixonado por criar experiências digitais
            incríveis e inovadoras. Transformando ideias em realidade através do
            código.
          </FooterDescription>
          <SocialLinks>
            <SocialLink
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {React.createElement(FaGithub as any)}
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {React.createElement(FaLinkedin as any)}
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Links Rápidos</FooterTitle>
          <FooterLinks>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#sobre">Sobre</FooterLink>
            <FooterLink href="#habilidades">Habilidades</FooterLink>
            <FooterLink href="#projetos">Projetos</FooterLink>
            <FooterLink href="#contato">Contato</FooterLink>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterLinks>
            <FooterLink href="mailto:bofe.ronaldo18@gmail.com">bofe.ronaldo18@gmail.com</FooterLink>
            <FooterLink href="tel:+5511941756013">
              +55 (11) 94175-6013
            </FooterLink>
            <FooterLink as="span">São Paulo, Brasil</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        © 2026 Ronaldo César.
      </FooterBottom>
    </FooterContainer>
  );
};
