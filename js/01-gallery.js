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
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
    )
    .join("");
}

const markup = makeMarkup(galleryItems);

gallery.innerHTML = markup;

//Прослуховування кліків по картинкам і відкрття модалки.;

gallery.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
      <div class="modal">
      <img
      width="1000"
      src="${e.target.dataset.source}"
      alt="${e.target.description}"
    />
      </div>`);

  instance.show();

  // Додання прослуховування на ескейп.
  // Закриття модалки по ескейпу
  window.addEventListener("keydown", closeBtnClick);

  function closeBtnClick(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", closeBtnClick);
    }
  }
}
