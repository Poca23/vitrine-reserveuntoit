import { SCREENS } from "../data/build.js";

const MODES = [
  { id: "desktop", label: "Desktop", size: [1280, 800] },
  { id: "mobile", label: "Mobile", size: [390, 844] },
];

const renderButton = ({ id, label }, active) => `
  <button class="device__btn" type="button" data-mode="${id}"
          aria-pressed="${active}">${label}</button>`;

const renderShot = ({ src, alt, caption }, [width, height]) => `
  <li class="device__item">
    <figure class="device__figure">
      <img class="device__img" src="${src}" alt="${alt}"
           width="${width}" height="${height}" loading="lazy">
      <figcaption class="device__caption">${caption}</figcaption>
    </figure>
  </li>`;

const renderList = ({ id, size }) => `
  <ul class="device__list device__list--${id}" role="list"
      data-panel="${id}" ${id === "desktop" ? "" : "hidden"}>
    ${SCREENS[id].map((shot) => renderShot(shot, size)).join("")}
  </ul>`;

const select = (host, mode) => {
  host.querySelectorAll("[data-mode]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.mode === mode);
  });
  host.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.panel !== mode;
  });
};

export const initDeviceSwitch = (root = document) => {
  const host = root.querySelector("[data-device]");
  if (!host) return;
  host.innerHTML = `
    <div class="device__switch" role="group" aria-label="Choisir l'affichage">
      ${MODES.map((m, i) => renderButton(m, i === 0)).join("")}
    </div>
    ${MODES.map(renderList).join("")}`;
  host.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-mode]");
    if (btn) select(host, btn.dataset.mode);
  });
};
