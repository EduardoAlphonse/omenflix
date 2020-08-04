import axios from 'axios';
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAll() {
  return axios.get(URL_CATEGORIES)
    .then((response) => response.data);
}

function getAllWithVideos() {
  return axios.get(`${URL_CATEGORIES}?_embed=videos`)
    .then((response) => response.data);
}

function createCategory(categoryData) {
  return axios.post(URL_CATEGORIES, {
    ...categoryData,
  })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log('Request successsful.');
    })
    .catch((error) => {
      console.log('Something went wrong :(');
      console.log(error);
    });
}

export default {
  getAll,
  getAllWithVideos,
  createCategory,
};
