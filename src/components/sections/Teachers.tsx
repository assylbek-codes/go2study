import React from 'react';
import { useTranslation } from 'react-i18next';

interface TeacherProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const TeacherCard: React.FC<TeacherProps> = ({ name, title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="h-64 bg-gray-300">
        {imageUrl && <img src={imageUrl} alt={name} className="w-full h-full object-cover" />}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Teachers: React.FC = () => {
  const { t } = useTranslation();
  
  const teachers = [
    {
      name: t('teachers.teacher1.name'),
      title: t('teachers.teacher1.title'),
      description: t('teachers.teacher1.desc')
    },
    {
      name: t('teachers.teacher2.name'),
      title: t('teachers.teacher2.title'),
      description: t('teachers.teacher2.desc')
    },
    {
      name: t('teachers.teacher3.name'),
      title: t('teachers.teacher3.title'),
      description: t('teachers.teacher3.desc')
    }
  ];

  return (
    <section id="teachers" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('teachers.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              title={teacher.title}
              description={teacher.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers; 