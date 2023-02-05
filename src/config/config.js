const baseURL = 'https://abdusamad4803.pythonanywhere.com';

const replaceKrill = (lang) => {
  if (lang === 'ўз') {
    return '';
  } else {
    return '/' + lang;
  }
};

const adaptToLanguage = (lang) => {
  if (lang === 'ўз') return 'uz';
  else return lang;
};

export { baseURL, replaceKrill, adaptToLanguage };
