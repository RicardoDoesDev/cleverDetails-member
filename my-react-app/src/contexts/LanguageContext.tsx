import React, { createContext, useContext, useState, ReactNode } from 'react';
import { appData } from '../data/appData';
import { appDataFR } from '../data/appDataFR';
import { appDataPT } from '../data/appDataPT';
import { AppData, UITranslations } from '../types';

type Language = 'en' | 'fr' | 'pt';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  appData: AppData;
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
    appData: appData,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 