export function render(arreyFoto) {
  const listFoto = document.querySelector('.list-foto');

  const gallery = arreyFoto.reduce((acum, item) => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = item;
    return (
      acum +
      `<li class="gallery-item">
      <a class="gallery-link" href=${largeImageURL} >
        <img
          class="gallery-image"
          src=${webformatURL}
         data-source=${largeImageURL}
          alt=${tags}
        />
      </a>
      <div>
      <p>Likes<br><span>${likes}</span></p>
      <p>Views<br><span>${views}</span></p>
      <p>Coments<br><span>${comments}</span></p>
      <p>Downloads<br><span>${downloads}</span></p>
      <div/>
    </li>`
    );
  }, '');
  listFoto.insertAdjacentHTML('beforeend', gallery);
  const galleryItem = document.querySelector('.gallery-item');
  const haightItem = galleryItem.getBoundingClientRect().height * 2;
  window.scrollBy({
    top: haightItem,
    left: 0,
    behavior: 'smooth',
  });
}
