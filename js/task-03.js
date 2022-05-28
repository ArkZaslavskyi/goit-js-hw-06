const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// gallery top node
// <ul class="gallery"></ul>

// markup of gallery item
// <li class="gallery__item"><img class="gallery__img" src="" alt=""></li>

// make gallery item markup string function
const makeGalleryItemMarkup = ({ url, alt }) =>
  `<li class="gallery__item"><img class="gallery__img" src="${url}" alt="${alt}"></li>`;

// make all gallery items markup & join them to single html-string
const galleryListItemsMarkup = images.map(makeGalleryItemMarkup).join('');

// get reference on gallery
const galleryRef = document.querySelector('.gallery');

// add items to gallery
galleryRef.insertAdjacentHTML('afterbegin', galleryListItemsMarkup);
