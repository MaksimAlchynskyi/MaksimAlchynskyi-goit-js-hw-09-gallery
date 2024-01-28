import { galleryItems } from "./app.js";

const gallery = document.querySelector(".js-gallery");
const modalImg = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const lighboxOverlay = document.querySelector(".lightbox__overlay");

galleryItems.forEach((item) => {
    gallery.insertAdjacentHTML("beforeend", `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
  </a>
</li>`)})

gallery.addEventListener("click", imageChooser);
closeButton.addEventListener("click", closeModal);
lighboxOverlay.addEventListener("click", (e) => {
    if (e.target === lighboxOverlay) {
        closeModal()
    }
})
document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        closeModal()
    }
})

function imageChooser(e) {
    if (e.target !== gallery) {
        e.preventDefault()
        let clickedImg = e.target;
        modalImg.src = clickedImg.src;
        modalImg.alt = clickedImg.alt;
        document.body.classList.add("show-modal");
    }
}

function closeModal(e) {
    document.body.classList.remove("show-modal");
}