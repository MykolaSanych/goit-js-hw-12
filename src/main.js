import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { pictureRequest } from './js/pixabay-api.js';
import { render } from './js/render-functions.js';

let gallery = new SimpleLightbox('.list-foto a');
let page = 1;
const inputSearch = document.querySelector('.input-search');
const loader = document.querySelector('.loader');
const buttonMore = document.querySelector('.button-more');

let queryWord = '';
document.querySelector('.input').addEventListener('submit', submitInput);
buttonMore.addEventListener('click', clickLoadMore);

function submitInput(event) {
  event.preventDefault();
  buttonMore.classList.add('hiden');
  const listFoto = document.querySelector('.list-foto');
  listFoto.innerHTML = '';
  queryWord = inputSearch.value.trim();
  if (queryWord.length < 3) {
    return iziToast.error({
      position: 'topRight',
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  page = 1;

  loader.classList.remove('hiden');
  pictureRequest(queryWord, page)
    .then(response => {
      if (response.status === 200) {
        loader.classList.add('hiden');
      }
      return response.data;
    })

    .then(images => {
      const arr = images.hits;

      if (arr.length > 0) {
        render(arr);
        gallery.refresh();
        buttonMore.classList.remove('hiden');
      } else {
        iziToast.error({
          position: 'topRight',
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })

    .catch(error => {
      console.log(error);
      throw error;
    });
}

function clickLoadMore() {
  loader.classList.remove('hiden');
  page++;
  pictureRequest(queryWord, page)
    .then(images => {
      const promis = images.data;
      const arr = promis.hits;

      if (arr.length > 0) {
        render(arr);
        gallery.refresh();
        loader.classList.add('hiden');
      }
      return images.data;
    })
    .then(images => {
      const quantityArr = Math.ceil(images.totalHits / 15);
      if (page > quantityArr) {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
        buttonMore.classList.add('hiden');
        loader.classList.add('hiden');
      }
    });
}
