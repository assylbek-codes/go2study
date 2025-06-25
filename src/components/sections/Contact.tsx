import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="mb-6">
              {t('contact.desc')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">📱</span>
                <p>{t('contact.phone')}</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">✉️</span>
                <p>{t('contact.email')}</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3">📍</span>
                <p>{t('contact.address')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact; 