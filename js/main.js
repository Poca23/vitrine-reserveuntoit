import { $ } from "./core/dom.js";
import { loadSections } from "./core/loader.js";
import { initNavToggle } from "./features/nav-toggle.js";

const init = async () => {
  initNavToggle();
  await loadSections($("#main"));
  // Étape 5 : reveal, scroll-progress, active-link, lightbox...
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
