import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_STORAGE_API_BASE_URL
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log(error.response);
      return Promise.reject(error.response);
    }
    if (error.request) {
      console.log(error.request);
      return Promise.reject(error.request);
    }
    return Promise.reject(error.response);
  }
);

export default instance;
