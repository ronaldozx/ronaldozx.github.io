import { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  ariaLabel: string;
}

export interface PersonalInfo {
  greeting: string;
  name: string;
  lastName: string;
  role: string;
  resumeUrl: string;
  imageUrl: string;
}

export interface Star {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
  color: string;
}
