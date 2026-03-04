import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { PersonalInfo, SocialLink } from '../../types';
import { Button, ButtonRow, FloatingParticles, TechHUD } from '../../components';
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
  return (
    <HeroSection id="home">
      <FloatingParticles />
      <HeroContent>
        <Greeting>{personalInfo.greeting}</Greeting>
        <Name>
          {personalInfo.name} <span>{personalInfo.lastName}</span>
        </Name>
        <Role>{personalInfo.role}</Role>
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
          Download Currículo
        </Button>
      </HeroContent>
      <IllustrationContainer>
        <TechHUD />
      </IllustrationContainer>
    </HeroSection>
  );
};
