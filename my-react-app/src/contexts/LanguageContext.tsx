import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import { appData } from '../data/appData';
import { appDataFR } from '../data/appDataFR';
import { appDataPT } from '../data/appDataPT';
import { AppData, UITranslations } from '../types';

type Language = 'en' | 'fr' | 'pt';

const LANGUAGE_COOKIE_NAME = 'preferred_language';
const DEFAULT_LANGUAGE: Language = 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  appData: AppData;
  t: UITranslations;
}

const translations: Record<Language, UITranslations> = {
  en: appData.ui,
  fr: appDataFR.ui,
  pt: appDataPT.ui
};

const getAppData = (language: Language): AppData => {
  switch (language) {
    case 'fr':
      return appDataFR;
    case 'pt':
      return appDataPT;
    default:
      return appData;
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize state with cookie value or default language
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = Cookies.get(LANGUAGE_COOKIE_NAME) as Language;
    return savedLanguage || DEFAULT_LANGUAGE;
  });

  // Update cookie when language changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    Cookies.set(LANGUAGE_COOKIE_NAME, newLanguage, {
      expires: 365, // Cookie expires in 1 year
      sameSite: 'strict',
      secure: window.location.protocol === 'https:',
      path: '/'
    });
  };

  // Effect to detect browser language on first visit (if no cookie exists)
  useEffect(() => {
    if (!Cookies.get(LANGUAGE_COOKIE_NAME)) {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('pt')) {
        setLanguage('pt');
      } else if (browserLang.startsWith('fr')) {
        setLanguage('fr');
      } else {
        setLanguage('en');
      }
    }
  }, []);

  const currentAppData = getAppData(language);
  const currentTranslations = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        appData: currentAppData,
        t: currentTranslations
      }}
    >
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