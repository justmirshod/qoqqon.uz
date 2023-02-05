const baseURL = 'https://abdusamad4803.pythonanywhere.com';

const replaceKrill = (lang) => {
  if (lang === 'ўз') {
    return '';
  } else {
    return lang;
  }
};

export { baseURL, replaceKrill };
