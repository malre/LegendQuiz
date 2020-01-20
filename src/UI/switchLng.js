import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng); // i18n.changeLanguage retourne une Promise
  };

  return (
    <div>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('fr')}>Français</Button>
    </div>
  );
}  

export default LanguageSwitcher;