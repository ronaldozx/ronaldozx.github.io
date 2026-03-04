import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollToTopButton } from './ScrollToTop.styles';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <ScrollToTopButton onClick={scrollToTop} aria-label="Voltar ao topo">
      {React.createElement(FaArrowUp as any)}
    </ScrollToTopButton>
  );
};
