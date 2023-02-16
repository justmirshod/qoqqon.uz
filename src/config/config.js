import translit from 'latin-to-cyrillic';
const baseURL = 'https://abdusamad4803.pythonanywhere.com';
const onlineUrl = 'https://qoqon-uz.vercel.app';

const adaptBtn = (item, path) => {
  let b = path;
  let arr = b.split('/');
  if (arr[1] === 'uz' || arr[1] === 'ru' || arr[1] === 'en') {
    if (item === 'ўз') {
      arr[1] = '';
      arr.shift();
    } else {
      arr[1] = item;
    }
    b = arr.join('/');
    return b;
  } else {
    arr.unshift(item);
    if (arr[2] === '') {
      arr.pop();
    }
    arr[1] = arr[0];
    arr[0] = '';
    if (item === 'ўз') {
      arr[1] = '';
      arr.shift();
    } else {
      arr[1] = item;
    }
    b = arr.join('/');
    return b;
  }
};

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

export {
  baseURL,
  onlineUrl,
  replaceKrill,
  adaptToLanguage,
  handleDateTime,
  adaptBtn,
};
