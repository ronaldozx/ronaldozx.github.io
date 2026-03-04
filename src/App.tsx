import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Navbar, GalaxyBackground, Footer, ScrollToTop, Intro } from './components';
import { Hero, About, Skills, Education, Courses, Projects, Contact } from './sections';
import { personalInfo, socialLinks, navItems } from './constants/personalInfo';

const App: React.FC = () => {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <>
          <GalaxyBackground />
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
    </ThemeProvider>
  );
};

export default App;
