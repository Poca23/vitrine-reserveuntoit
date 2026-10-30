import { STACK, FEATURES } from "../data/build.js";

const stackCard = ({ name, role }) => `
  <article class="card">
    <h4 class="card__title">${name}</h4>
    <p class="card__text">${role}</p>
  </article>`;

const featureCard = ({ title, items }) => `
  <article class="card">
    <h4 class="card__title">${title}</h4>
    <ul class="card__list">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  </article>`;

export const initBuild = (root = document) => {
  const stack = root.querySelector("[data-stack]");
  const features = root.querySelector("[data-features]");
  if (stack) stack.innerHTML = STACK.map(stackCard).join("");
  if (features) features.innerHTML = FEATURES.map(featureCard).join("");
};
