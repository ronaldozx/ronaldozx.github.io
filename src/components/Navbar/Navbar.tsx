import React, { useState } from 'react';
import { NavItem as NavItemType } from '../../types';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  NavbarContainer,
  NavContent,
  Logo,
  NavList,
  NavItem,
  NavRight,
  HamburgerButton,
  MobileMenu,
} from './Navbar.styles';

interface NavbarProps {
  logo: string;
  navItems: NavItemType[];
}

export const Navbar: React.FC<NavbarProps> = ({ logo, navItems }) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLabels = [
    t.navbar.home,
    t.navbar.about,
    t.navbar.education,
    t.navbar.courses,
    t.navbar.projects,
    t.navbar.contact,
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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
            <HamburgerButton 
              $isOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </HamburgerButton>
          </NavRight>
        </NavContent>
      </NavbarContainer>
      {isMenuOpen && (
        <MobileMenu>
          {navItems.map((item, index) => (
            <a 
              key={item.label}
              href={item.href} 
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={handleNavClick}
            >
              {navLabels[index]}
            </a>
          ))}
        </MobileMenu>
      )}
    </>
  );
};
