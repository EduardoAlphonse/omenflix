import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (data) => {
      if (data.ok) {
        const json = await data.json();
        return json;
      }

      throw new Error('Não foi possível obter os dados =[');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (data) => {
      if (data.ok) {
        const json = await data.json();
        return json;
      }

      throw new Error('Não foi possível obter os dados =[');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
