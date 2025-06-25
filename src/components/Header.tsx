import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.approach'), href: '#approach' },
    { name: t('nav.results'), href: '#results' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-white shadow-elegant py-2' 
        : 'bg-white py-3'}
      `}
    >
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={logo} alt="Go2Study Logo" className="w-15 h-10 mr-2" />
              <div>
                <div className="text-2xl font-bold tracking-tight">
                  <span className="text-primary-600">Go2</span>
                  <span className="text-gray-800">Study</span>
                </div>
                <div className="text-xs -mt-1 text-gray-500 hidden sm:block">{t('hero.badge')}</div>
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button 
              className="ml-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-4 py-2 rounded-full text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition duration-300"
              >
                {link.name}
              </a>
            ))}
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-white border-t shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-4 py-2 rounded-md hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-2 bg-primary-500 text-gray-800 font-medium px-6 py-3 rounded-md hover:bg-primary-600 transition duration-300 w-full flex items-center justify-center">
              {t('nav.getStarted')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 