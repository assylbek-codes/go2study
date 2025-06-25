import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };


  const getCurrentLanguageName = () => {
    switch(i18n.language) {
      case 'ru':
        return t('language.ru');
      case 'kk':
        return t('language.kk');
      default:
        return t('language.en');
    }
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 px-3 py-2 rounded-full hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="font-medium">{getCurrentLanguageName()}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <button 
            onClick={() => changeLanguage('en')} 
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 w-full text-left ${i18n.language === 'en' ? 'bg-primary-50 text-primary-600' : ''}`}
          >
            {t('language.en')}
          </button>
          <button 
            onClick={() => changeLanguage('ru')} 
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 w-full text-left ${i18n.language === 'ru' ? 'bg-primary-50 text-primary-600' : ''}`}
          >
            {t('language.ru')}
          </button>
          <button 
            onClick={() => changeLanguage('kk')} 
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 w-full text-left ${i18n.language === 'kk' ? 'bg-primary-50 text-primary-600' : ''}`}
          >
            {t('language.kk')}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 