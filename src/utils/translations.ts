import en from '../locales/en.json';
import es from '../locales/es.json';
import gn from '../locales/gn.json';

export const translations: Record<string, Translations> = {
  en,
  es,
  gn,
};

interface Translations {
  hello: string;
  welcome: string;
}

