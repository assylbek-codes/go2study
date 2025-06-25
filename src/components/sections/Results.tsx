import React from 'react';
import { useTranslation } from 'react-i18next';

interface StatCardProps {
  value: string;
  description: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-card hover:shadow-elegant border border-gray-100 transition duration-300 relative overflow-hidden group">
      {icon && <div className="absolute right-4 top-4 text-primary-200 opacity-50 group-hover:opacity-80 transition duration-300">{icon}</div>}
      <span className="text-4xl font-bold text-primary-600 block mb-2 text-gradient">{value}</span>
      <p className="text-gray-700 relative z-10">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

interface TestimonialProps {
  quote: string;
  author: string;
  school: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, school }) => {
  return (
    <div className="border-l-4 border-primary-500 pl-6 py-2 relative hover:bg-primary-50 transition duration-300 rounded-r-lg">
      <svg className="absolute text-primary-200 opacity-20 top-2 left-2 w-10 h-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="italic mb-4 text-gray-700">{quote}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-xs text-primary-600">{school}</p>
        </div>
      </div>
    </div>
  );
};

const Results: React.FC = () => {
  const { t } = useTranslation();
  
  const stats = [
    { 
      value: t('results.stat1.value'), 
      description: t('results.stat1.desc'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      value: t('results.stat2.value'), 
      description: t('results.stat2.desc'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      value: t('results.stat3.value'), 
      description: t('results.stat3.desc'),
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: `Всего за год я прошел путь от ученика с обычными оценками до ученика НИШ! В начале подготовки мои шансы казались призрачными — пробные тесты я писал на 30-40%. Но благодаря системной работе с преподавателями образовательного центра все изменилось.

Мы разбирали каждую тему до полного понимания, отрабатывали сотни задач, учились мыслить логически. Постепенно мои результаты росли: 50%... 60%... 70%!

На экзамене я узнавал знакомые шаблоны задач и смог набрать проходной балл. Теперь я учусь в НИШ и точно знаю: правильная подготовка + упорство = успех. Огромное спасибо моим педагогам за этот рывок, особенно Аружан апай спасибо вам!`,
      author: "Алихан",
      school: "НИШ Алматы"
    },
    {
      quote: "Спасибо вам тоже! Многие благодаря вам поступили в топ-школы Казахстана! Спасибо за ваш труд, терпение и желание учить, за то что вы всегда мотивировали, давали советы и объясняли. Вы открыли многим светлое будущее, ведь помогли и дали возможность поступить в лучшие школы страны и получить хорошое образование. Очень благодарна вам за вашу поддержку, за то что помогали и учили как бы трудно это не было 💛",
      author: "Айханым",
      school: "Грант в НИШ"
    },
    {
      quote: "Большая часть ваших учеников(иц) поступили в НИШ, БИЛ, Спасибо за ваши труды , за вашу поддержку, знания . Вы всегда объясняли все на высшем уровне.Вы дали нам новые знания , открыли возможность поступить в лучшие школы и дали хорошее образование. Я Благодарна за ваши усилия, за вашу поддержку.",
      author: "Дана",
      school: "Грант в БИЛ"
    }
  ];

  return (
    <section id="results" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full -ml-48 -mb-48 opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-3">
            {t('results.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('results.title')}</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              value={stat.value} 
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-card border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{t('results.success.title')}</h3>
          </div>
          
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                quote={testimonial.quote} 
                author={testimonial.author}
                school={testimonial.school}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results; 