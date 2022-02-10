import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Создание и рендер разметки по массиву данных galleryItems и
//  предоставленному шаблону элемента галереи.

const galleryContainer = document.querySelector('.gallery');
const gridGallery = createGalleryItemsMurkup(galleryItems);
let instance;

function createGalleryItemsMurkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
      return `
       <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
   }).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', gridGallery);

// 2. Реализация делегирования на div.gallery и получение url
//  большого изображения.

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {  
   e.preventDefault();
   const isGalleryLink = e.target.classList.contains('gallery__image');   
   if (!isGalleryLink) {
      return;
   }    
   getOriginalImgFullScreen(e.target.dataset.source);
};

function getOriginalImgFullScreen(src) {
   instance = basicLightbox.create(`<img src="${src}" width="800" height="600">`,
      {
      onShow: instance => {
        addListener();
      },
      onClose: instance => {
        removeListener();
      },
    },);
instance.show()
};

function onEscClick(e) {
   if (e.code === 'Escape') {
    instance.close();
   }   
}

function addListener() {
    window.addEventListener('keydown', onEscClick);
};

function removeListener() {
   window.removeEventListener('keydown', onEscClick);
};



