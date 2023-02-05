import axios from 'axios';
import { baseURL } from '../config/config';

export const useHttp = () => {
  const axiosInstance = axios.create({
    baseURL,
  });

  const request = async ({ method = 'GET', url, data, headers }) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        headers,
      });
      if (response.statusText !== 'OK') {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return { request };
};
