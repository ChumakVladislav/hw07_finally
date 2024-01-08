import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Створення посилання на галерею;
const gallery = document.querySelector(".gallery");

//Створення розмітки
function makeMarkup(objGallery) {
  return objGallery
    .map(
      ({ original, preview, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
    )
    .join("");
}

const markup = makeMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markup);

//Додавання прослуховуча подій та відкриття модалки

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});
