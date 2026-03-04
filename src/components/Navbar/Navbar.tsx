import React from 'react';
import { NavItem as NavItemType } from '../../types';
import {
  NavbarContainer,
  NavContent,
  Logo,
  NavList,
  NavItem,
  NavDots,
  Dot,
} from './Navbar.styles';

interface NavbarProps {
  logo: string;
  navItems: NavItemType[];
}

export const Navbar: React.FC<NavbarProps> = ({ logo, navItems }) => {
  return (
    <NavbarContainer>
      <NavContent>
        <Logo>{logo}</Logo>
        <NavList>
          {navItems.map((item) => (
            <NavItem key={item.label}>
              <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.label}
              </a>
            </NavItem>
          ))}
        </NavList>
        <NavDots>
          <Dot />
          <Dot />
          <Dot />
        </NavDots>
      </NavContent>
    </NavbarContainer>
  );
};
