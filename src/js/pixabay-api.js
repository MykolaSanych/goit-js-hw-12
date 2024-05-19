import axios from 'axios';

const KEY = '43875376-ffcf8bec5b4985f5e1efc350d';

export const pictureRequest = async (request, page) => {
  return await axios.get(
    `https://pixabay.com/api/?key=${KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`
  );
};
