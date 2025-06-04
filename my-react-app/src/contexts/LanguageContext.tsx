import React, { createContext, useContext, useState, ReactNode } from 'react';
import { appData } from '../data/appData';
import { appDataFR } from '../data/appDataFR';
import { appDataPT } from '../data/appDataPT';
import { UITranslations } from '../types';

type Language = 'en' | 'fr' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: UITranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: appData.ui,
  fr: appDataFR.ui,
  pt: appDataPT.ui
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 