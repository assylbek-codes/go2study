import React from 'react';
import { useTranslation } from 'react-i18next';

const Approach: React.FC = () => {
  const { t } = useTranslation();
  
  const approaches = [
    {
      text: t('approach.point1'),
      icon: '🎯'
    },
    {
      text: t('approach.point2'),
      icon: '💻'
    },
    {
      text: t('approach.point3'),
      icon: '📊'
    },
    {
      text: t('approach.point4'),
      icon: '🧠'
    },
    {
      text: t('approach.point5'),
      icon: '🤖'
    }
  ];

  return (
    <section id="approach" className="py-24 bg-primary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('approach.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('approach.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <div className="space-y-8">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex items-center mr-6">
                      <span className="bg-primary-500 text-gray-900 font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </span>
                      <div className="text-3xl">
                        {approach.icon}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {approach.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-card border border-blue-100 lg:sticky lg:top-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('approach.ai.header')}
              </h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('approach.ai.title')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t('approach.ai.point1')}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t('approach.ai.point2')}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                              <div className="flex items-center">
                <div className="text-2xl mr-3">📱</div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('approach.ai.bot.title')}</h4>
                  <p className="text-sm text-gray-600">{t('approach.ai.bot.desc')}</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach; 