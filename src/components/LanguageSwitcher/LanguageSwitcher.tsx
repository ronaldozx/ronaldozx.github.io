import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  SwitcherContainer,
  LanguageButton,
} from './LanguageSwitcher.styles';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <SwitcherContainer>
      <LanguageButton
        $active={language === 'pt'}
        onClick={() => setLanguage('pt')}
        title="Português"
      >
        PT
      </LanguageButton>
      <LanguageButton
        $active={language === 'en'}
        onClick={() => setLanguage('en')}
        title="English"
      >
        EN
      </LanguageButton>
      <LanguageButton
        $active={language === 'es'}
        onClick={() => setLanguage('es')}
        title="Español"
      >
        ES
      </LanguageButton>
    </SwitcherContainer>
  );
};
