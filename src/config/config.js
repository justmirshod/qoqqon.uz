import translit from 'latin-to-cyrillic';
const baseURL = 'https://abdusamad4803.pythonanywhere.com';

const replaceKrill = (lang) => {
  if (lang === 'ўз') {
    return '';
  } else {
    return '/' + lang;
  }
};

const adaptToLanguage = (lang, translations) => {
  if (lang === 'ўз') {
    return translit(translations.uz);
  } else {
    return translations[lang];
  }
};

const handleDateTime = (dateString, activeLang) => {
  const months = {
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    ru: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    ўз: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    uz: [
      'Yanvar',
      'Fevral',
      'Mart',
      'Aprel',
      'May',
      'Iyun',
      'Iyul',
      'Avgust',
      'Sentabr',
      'Oktabr',
      'Noyabr',
      'Dekabr',
    ],
  };
  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const monthName = months[activeLang][monthIndex];

  const day = date.getDate();
  const year = date.getFullYear();
  return monthName + ' ' + day + ', ' + year;
};

export { baseURL, replaceKrill, adaptToLanguage, handleDateTime };
