import axios from 'api/axios';
import ls from 'lib/core/storageFactory';

const get = ({ endpoint, headers = [], payload = {} }) => {
  const config = { headers: {} };
  if (headers.includes('auth')) {
    config.headers.Authorization = `token ${ls.get('userToken')}`;
  }
  config.params = payload;
  return axios
    .get(endpoint, config)
    .then(res => ({
      error: null,
      request: payload,
      response: res.data
    }))
    .catch(err => ({
      error: { code: err, message: err.data },
      request: payload,
      response: null
    }));
};

const post = ({ endpoint, headers = [], payload = {}, cb }) => {
  const config = { headers: {} };
  if (cb) {
    config.onUploadProgress = cb;
  }
  if (headers.includes('auth')) {
    config.headers.Authorization = `token ${ls.get('userToken')}`;
  }
  if (headers.includes('formData')) {
    config.headers = {
      ...config.headers,
      'Content-Type': 'multipart/form-data'
    };
  }
  return axios
    .post(endpoint, payload, config)
    .then(res => ({
      error: null,
      request: payload,
      response: res.data
    }))
    .catch(err => ({
      error: { code: err.status, message: err.data },
      request: payload,
      response: null
    }));
};

export { get, post };
