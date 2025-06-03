import { useLanguage } from '../contexts/LanguageContext';
import { appData } from '../data/appData';
import { appDataFR } from '../data/appDataFR';
import { appDataPT } from '../data/appDataPT';
import { AppData } from '../types';

export function useAppData(): AppData {
  const { language } = useLanguage();

  switch (language) {
    case 'fr':
      return appDataFR;
    case 'pt':
      return appDataPT;
    default:
      return appData;
  }
} 