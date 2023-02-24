import axios from 'axios';
import { API_KEY, BASE_URL } from '../utils/constants';

export const getNews = ({ query }) => {
  const url = `${BASE_URL}/everything?pageSize=10&q=${query || 'anything'}&apiKey=${API_KEY}`;

  console.log(url);
  return axios.get(url);
};
