import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const gridGallery = createGalleryItemsMurkup(galleryItems);

function createGalleryItemsMurkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
   }).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', gridGallery);

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionPosition: 'top'});