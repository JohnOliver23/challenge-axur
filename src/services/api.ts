import axios from 'axios';
import { getApiUrl } from '../services/functions';
import { PostSolicitation } from './types';
export const api = axios.create({
  baseURL: getApiUrl(),
});

export const postSolicitation = async (data: PostSolicitation) => {
  const result = await api
    .post('/crawl', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
  return result;
};

export const getSolicitation = async (id: string) => {
  const result = await api
    .get(`/crawl/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
  return result;
};
