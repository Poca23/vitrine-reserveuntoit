import { $ } from "../core/dom.js";
import { ADMIN } from "../data/admin.js";
import { BACKLOG, LESSONS } from "../data/future.js";

const cards = (items) =>
  items
    .map(
      (i) =>
        `<article class="card"><h4 class="card__title">${i.title}</h4><p class="card__text">${i.text}</p></article>`,
    )
    .join("");

export const initFuture = () => {
  $("[data-admin]").innerHTML = ADMIN.map(
    (a) => `<li><figure class="gallery__figure">
      <img class="gallery__img" src="${a.src}" alt="${a.alt}" width="1280" height="800" loading="lazy">
      <figcaption class="gallery__caption">${a.caption}</figcaption>
    </figure></li>`,
  ).join("");
  $("[data-backlog]").innerHTML = cards(BACKLOG);
  $("[data-lessons]").innerHTML = cards(LESSONS);
};
