import { SPRINTS } from "../data/sprints.js";

const renderItem = ({ title, duration, text }, index) => `
  <li class="timeline__item">
    <span class="timeline__badge" aria-hidden="true">${index + 1}</span>
    <h3 class="timeline__title">${title}</h3>
    ${duration ? `<p class="timeline__duration">${duration}</p>` : ""}
    <p class="timeline__text">${text}</p>
  </li>`;

export const initTimeline = (root = document) => {
  const list = root.querySelector("[data-timeline]");
  if (!list) return;
  list.innerHTML = SPRINTS.map(renderItem).join("");
};
