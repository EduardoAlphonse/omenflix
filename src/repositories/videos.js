import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function createVideo(videoData) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoData),
  })
    .then(async (data) => {
      if (data.ok) {
        const json = await data.json();
        return json;
      }

      throw new Error('Não foi possível obter os dados =[');
    });
}

export default {
  createVideo,
};
