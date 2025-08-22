import React from 'react';
import { useTranslation } from 'react-i18next';
import image from '../../assets/image.png';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="py-24 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply opacity-70 animate-float"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-primary-100 rounded-full opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-300 rounded-full opacity-40 animate-pulse-slow"></div>
        
        <svg className="absolute bottom-0 left-0 text-primary-200 opacity-20 w-40 h-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M36.4,-61.1C45.6,-54.2,50.5,-40.9,57.2,-28.2C63.9,-15.6,72.3,-3.6,71.4,7.8C70.5,19.2,60.2,30,49.2,38.9C38.2,47.8,26.5,54.8,14.1,59C1.7,63.2,-11.4,64.6,-22.2,60.3C-33,56,-41.5,46,-48.4,35.1C-55.3,24.1,-60.6,12.1,-61.2,-0.4C-61.8,-12.8,-57.8,-25.5,-50.2,-34.8C-42.7,-44.1,-31.5,-49.8,-20.7,-55.9C-9.9,-62,-0.5,-68.4,9.9,-69.2C20.3,-70,38.5,-65.2,36.4,-61.1Z" transform="translate(100 100)" />
        </svg>
        
        <svg className="absolute top-1/3 right-0 text-primary-300 opacity-10 w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-73.2C59.5,-64.9,65.9,-47.8,70.3,-31.6C74.7,-15.4,77,-0.2,73.8,13.3C70.6,26.8,61.8,38.5,50.4,47.3C39,56.1,25,61.9,10.5,65.3C-4,68.7,-19,69.7,-32.7,65C-46.5,60.4,-59.1,50.1,-67.3,36.3C-75.5,22.6,-79.3,5.5,-76.2,-10.5C-73.2,-26.5,-63.3,-41.5,-50.2,-49.7C-37.1,-58,-20.8,-59.6,-3.4,-55.6C13.9,-51.5,35.9,-41.9,47.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-5">
              {t('hero.badge')}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/77753897233"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center sm:justify-start text-lg group"
              >
                <svg 
                  className="w-6 h-6 mr-3 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {t('cta.freeTest')}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>

              </div>
            </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative bg-white p-5 rounded-2xl shadow-card">
              <img 
                src={image} 
                alt="Students" 
                className="rounded-lg shadow-sm mx-auto"
              />
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-primary-50 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary-700 block">85%</span>
                  <p className="text-gray-600 text-sm">{t('hero.stats.success')}</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary-700 block">1000+</span>
                  <p className="text-gray-600 text-sm">{t('hero.stats.students')}</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary-700 block">4,4/5.0</span>
                  <p className="text-gray-600 text-sm">{t('hero.stats.rating')}</p>
                </div>
              </div>
              
              <div className="absolute -right-4 -bottom-4 transform rotate-12">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#FFF7CC" fillOpacity="0.5"/>
                  <path d="M53.5 26.5L26.5 53.5M26.5 26.5L53.5 53.5" stroke="#FFE252" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 