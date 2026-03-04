import React from 'react';
import { NavItem as NavItemType } from '../../types';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  NavbarContainer,
  NavContent,
  Logo,
  NavList,
  NavItem,
  NavDots,
  Dot,
  NavRight,
} from './Navbar.styles';

interface NavbarProps {
  logo: string;
  navItems: NavItemType[];
}

export const Navbar: React.FC<NavbarProps> = ({ logo, navItems }) => {
  const { t } = useLanguage();

  const navLabels = [
    t.navbar.home,
    t.navbar.about,
    t.navbar.education,
    t.navbar.courses,
    t.navbar.projects,
    t.navbar.contact,
  ];

  return (
    <NavbarContainer>
      <NavContent>
        <Logo>{logo}</Logo>
        <NavList>
          {navItems.map((item, index) => (
            <NavItem key={item.label}>
              <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                {navLabels[index]}
              </a>
            </NavItem>
          ))}
        </NavList>
        <NavRight>
          <LanguageSwitcher />
        </NavRight>
      </NavContent>
    </NavbarContainer>
  );
};
