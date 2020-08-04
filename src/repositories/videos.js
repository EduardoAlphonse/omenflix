import axios from 'axios';
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function createVideo(videoData) {
  return axios.post(URL_VIDEOS, {
    ...videoData,
  })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log('Video added successfully.');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Something went wrong.. :(');
    });
}

export default {
  createVideo,
};
