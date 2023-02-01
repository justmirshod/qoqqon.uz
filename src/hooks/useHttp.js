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
      return response.data;
    } catch (e) {
      throw e;
    }
  };
  return { request };
};
