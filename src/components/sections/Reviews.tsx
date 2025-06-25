import React from 'react';
import { useTranslation } from 'react-i18next';

interface ReviewProps {
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
}

const Review: React.FC<ReviewProps> = ({ name, role, content, avatarUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-500">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 mr-4 overflow-hidden flex items-center justify-center text-blue-600 font-bold text-xl">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-blue-600">{role}</p>
        </div>
      </div>
      <div className="relative">
        <svg className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative pl-6 italic text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  
  const reviews = [
    {
      name: "Сауле",
      role: "Мама Рамазан",
      content: `
      Я мама ученицы вашего центра Рамазан Даны! Мы уже 6 месяцев готовимся вместе с вами на экзамены НИШ и очень довольны результатом!

Вы даёте знания, делитесь своим опытом, уделяете своё внимание — и за это огромное спасибо!

Спасибо за ваш профессионализм, уникальный подход к каждому ребёнку, ваше безграничное терпение и ответственность!

Желаем вам здоровья, удачи и благополучия! Буду рекомендовать именно ВАС — GO2STUDY!`
    },
    {
      name: "Гульмира",
      role: "Мама Аманали",
      content: `Здравствуйте! Вот и подходят к завершению онлайн занятия моего сына. Хочу выразить Вам и всей вашей команде огромную благодарность за такой подход к обучению детей, за дисциплину и, конечно же, за знания. ❤️🙏
Я не жалею, что сотрудничали с вами всё это время. Я считаю, что мой сын, занимаясь на ваших доп. занятиях, извлёк очень много полезного и нужного. 👍 Мы с Аманали очень благодарны вам за всё. Огромнейшее спасибо и низкий поклон за ваш труд! 🙏❤️ И, конечно же, я буду рекомендовать вас своим знакомым в будущем. Очень ценю ваши старания.`
    },
    {
      name: "Гульжан",
      role: "Мама ученика",
      content: `Здравствуйте, хотела оставить отзыв на учебный центр Go2Study.
Учителя пунктуальные, преподают на высоком уровне и объясняют доходчиво. В непонятных ситуациях с заданиями помогают разобраться.
Куратор вежливый, всегда на связи и решает все проблемы. С помощью занятий в учебном центре Go2Study можно заметно повысить уровень образованности и увеличить шансы поступления в НИШ, БИЛ или РФМШ.
Знания моей дочери действительно заметно повысились.
Я не жалею, что доверилась именно этому учебному заведению. Всем буду рекомендовать и советовать. Спасибо!`
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">{t('reviews.badge')}</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">{t('reviews.title')}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <Review
              key={index}
              name={review.name}
              role={review.role}
              content={review.content}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews; 