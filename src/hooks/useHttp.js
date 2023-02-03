import axios from 'axios';
export const useHttp = () => {
  const request = async (method, url, data, headers) => {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers,
      });
      if (response.statusText !== 'OK') {
        console.log('sdkljf');
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  };
  return { request };
};
