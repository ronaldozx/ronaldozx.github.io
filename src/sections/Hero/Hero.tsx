import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { PersonalInfo, SocialLink } from '../../types';
import { Button, ButtonRow, FloatingParticles, TechHUD } from '../../components';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  HeroSection,
  HeroContent,
  Greeting,
  Name,
  Role,
  IllustrationContainer,
} from './Hero.styles';

interface HeroProps {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, socialLinks }) => {
  const { t } = useLanguage();

  return (
    <HeroSection id="home">
      <FloatingParticles />
      <HeroContent>
        <Greeting>{t.hero.greeting}</Greeting>
        <Name>
          {personalInfo.name} <span>{personalInfo.lastName}</span>
        </Name>
        <Role>{t.hero.role}</Role>
        <ButtonRow>
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              href={link.url}
              icon={link.icon}
              ariaLabel={link.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </Button>
          ))}
        </ButtonRow>
        <Button
          href={personalInfo.resumeUrl}
          icon={FaDownload as any}
          ariaLabel="download"
          variant="gradient"
          download
        >
          {t.hero.downloadCV}
        </Button>
      </HeroContent>
      <IllustrationContainer>
        <TechHUD />
      </IllustrationContainer>
    </HeroSection>
  );
};
