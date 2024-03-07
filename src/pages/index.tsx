import React, { useState } from 'react';
import Button from '../components/Button';
import TranslationText from '../components/TranslationText';
import { translations } from '../utils/translations';

const IndexPage: React.FC = () => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      {translations[language] && (
        <>
          <TranslationText translation={translations[language].hello} />
          <TranslationText translation={translations[language].welcome} />
        </>
      )}
      <Button text="English" onClick={() => changeLanguage('en')} />
      <Button text="Español" onClick={() => changeLanguage('es')} />
      <Button text="Guaraní" onClick={() => changeLanguage('gn')} />
    </div>
  );
};

export default IndexPage;
