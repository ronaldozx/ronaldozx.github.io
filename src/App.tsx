import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar, GalaxyBackground, Footer, ScrollToTop, Intro } from './components';
import { Hero, About, Skills, Education, Courses, Projects, Contact } from './sections';
import { personalInfo, socialLinks, navItems } from './constants/personalInfo';

const AppContent: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      <GlobalStyle />
      <GalaxyBackground />
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <>
          <Navbar logo="R" navItems={navItems} />
          <Hero personalInfo={personalInfo} socialLinks={socialLinks} />
          <About />
          <Skills />
          <Education />
          <Courses />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
