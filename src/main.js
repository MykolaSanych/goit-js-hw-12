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

const submitInput = async event => {
  try {
    event.preventDefault();
    buttonMore.classList.add('hiden');
    const listFoto = document.querySelector('.list-foto');
    listFoto.innerHTML = '';
    queryWord = inputSearch.value.trim();
    if (queryWord.length < 3) {
      return iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'Please enter your request.',
      });
    }
    page = 1;

    loader.classList.remove('hiden');
    const response = await pictureRequest(queryWord, page);
    if (response.status === 200) {
      loader.classList.add('hiden');
    }
    const images = response.data;
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
    const quantityArr = Math.ceil(images.totalHits / 15);
    if (page === quantityArr) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      buttonMore.classList.add('hiden');
      loader.classList.add('hiden');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

document.querySelector('.input').addEventListener('submit', submitInput);

const clickLoadMore = async () => {
  loader.classList.remove('hiden');
  page++;
  const images = await pictureRequest(queryWord, page);
  const promis = images.data;
  const arr = promis.hits;
  if (arr.length > 0) {
    render(arr);
    gallery.refresh();
    loader.classList.add('hiden');
    const galleryItem = document.querySelector('.gallery-item');
    const haightItem = galleryItem.getBoundingClientRect().height * 2;
    window.scrollBy({
      top: haightItem,
      left: 0,
      behavior: 'smooth',
    });
  }
  const quantityArr = Math.ceil(images.data.totalHits / 15);
  console.log(images);
  console.log(quantityArr);
  console.log(page);
  if (page === quantityArr) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
    });
    buttonMore.classList.add('hiden');
    loader.classList.add('hiden');
  }
};

buttonMore.addEventListener('click', clickLoadMore);
