import React from 'react';
import { useTranslation } from 'react-i18next';

const Schools: React.FC = () => {
  const { t } = useTranslation();

  const schools = [
    {
      title: 'schools.nis.title',
      desc: 'schools.nis.desc',
      icon: '📘',
      color: 'blue'
    },
    {
      title: 'schools.bil.title',
      desc: 'schools.bil.desc',
      icon: '📗',
      color: 'green'
    },
    {
      title: 'schools.rfmsh.title',
      desc: 'schools.rfmsh.desc',
      icon: '📙',
      color: 'orange'
    }
  ];

  return (
    <section id="schools" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('schools.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('schools.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
            >
              <div className="p-8">
                <div className="text-6xl mb-6 text-center">
                  {school.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t(school.title)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-center">
                  {t(school.desc)}
                </p>
                
                <div className="mt-6 flex justify-center">
                  <div className={`w-16 h-1 bg-gradient-to-r ${
                    school.color === 'blue' ? 'from-blue-400 to-blue-600' :
                    school.color === 'green' ? 'from-green-400 to-green-600' :
                    'from-orange-400 to-orange-600'
                  } rounded-full group-hover:w-20 transition-all duration-300`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('schools.cta.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('schools.cta.desc')}
            </p>
            <a
              href="https://wa.me/77474682404"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              {t('schools.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schools; 