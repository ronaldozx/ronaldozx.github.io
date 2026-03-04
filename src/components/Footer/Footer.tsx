import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
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
  const { t } = useLanguage();

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
              href="https://github.com/ronaldozx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {React.createElement(FaGithub as any)}
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ronaldo-c%C3%A9sar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {React.createElement(FaLinkedin as any)}
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>{t.footer.quickLinks}</FooterTitle>
          <FooterLinks>
            <FooterLink href="#home">{t.navbar.home}</FooterLink>
            <FooterLink href="#sobre">{t.navbar.about}</FooterLink>
            <FooterLink href="#habilidades">{t.skills.title}</FooterLink>
            <FooterLink href="#projetos">{t.projects.title}</FooterLink>
            <FooterLink href="#contato">{t.contact.title}</FooterLink>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterTitle>{t.footer.contactSection}</FooterTitle>
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
        {t.footer.copyright}
      </FooterBottom>
    </FooterContainer>
  );
};
