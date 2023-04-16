// Add imports above this line
import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createItems = (item) => {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    })
    .join("");
};  

const markupGalleryItem = createItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', markupGalleryItem);

const lightbox = new SimpleLightbox('.gallery a',
    {captionsData: "alt",
	captionDelay: 250,
	animationSpeed: 250,
	fadeSpeed: 500,});

console.log(galleryItems);