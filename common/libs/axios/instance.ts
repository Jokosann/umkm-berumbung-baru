import { NEXT_PUBLIC_API_URL } from '@/common/constant/env';
import axios from 'axios';

const headers = {
  Accept: 'Application/json',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  Expires: 0,
};

const instance = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.request.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default instance;
