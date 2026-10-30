import { GALLERY } from "../data/gallery.js";

const renderPanel = ({ id, items }, active) => `
  <div class="tabs__panel" role="tabpanel" id="panel-${id}"
       aria-labelledby="tab-${id}" ${active ? "" : "hidden"}>
    <ul class="gallery" role="list">
      ${items
        .map(
          ({ src, alt, caption }) => `
        <li class="gallery__item">
          <figure class="gallery__figure">
            <img class="gallery__img" src="${src}" alt="${alt}"
                 width="800" height="600" loading="lazy">
            <figcaption class="gallery__caption">${caption}</figcaption>
          </figure>
        </li>`,
        )
        .join("")}
    </ul>
  </div>`;

const renderTab = ({ id, label }, active) => `
  <button class="tabs__tab" role="tab" type="button" id="tab-${id}"
          aria-controls="panel-${id}" aria-selected="${active}"
          tabindex="${active ? 0 : -1}">${label}</button>`;

const select = (root, id) => {
  root.querySelectorAll(".tabs__tab").forEach((tab) => {
    const on = tab.id === `tab-${id}`;
    tab.setAttribute("aria-selected", on);
    tab.tabIndex = on ? 0 : -1;
  });
  root.querySelectorAll(".tabs__panel").forEach((panel) => {
    panel.hidden = panel.id !== `panel-${id}`;
  });
};

const onKeydown = (root, event) => {
  const tabs = [...root.querySelectorAll(".tabs__tab")];
  const index = tabs.indexOf(document.activeElement);
  if (index === -1) return;
  const moves = {
    ArrowRight: index + 1,
    ArrowLeft: index - 1,
    Home: 0,
    End: tabs.length - 1,
  };
  if (!(event.key in moves)) return;
  event.preventDefault();
  const next = tabs[(moves[event.key] + tabs.length) % tabs.length];
  next.focus();
  select(root, next.id.replace("tab-", ""));
};

export const initTabs = (root = document) => {
  const host = root.querySelector("[data-tabs]");
  if (!host) return;
  host.innerHTML = `
    <div class="tabs__list" role="tablist" aria-label="Types de documents de conception">
      ${GALLERY.map((group, i) => renderTab(group, i === 0)).join("")}
    </div>
    ${GALLERY.map((group, i) => renderPanel(group, i === 0)).join("")}`;
  host.addEventListener("click", (event) => {
    const tab = event.target.closest(".tabs__tab");
    if (tab) select(host, tab.id.replace("tab-", ""));
  });
  host.addEventListener("keydown", (event) => onKeydown(host, event));
};
