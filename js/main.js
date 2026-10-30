import { $ } from "./core/dom.js";
import { loadSections } from "./core/loader.js";
import { initNavToggle } from "./features/nav-toggle.js";
import { initTimeline } from "./features/timeline.js";
import { initTabs } from "./features/tabs.js";

const init = async () => {
  initNavToggle();
  await loadSections($("#main"));
  initTimeline();
  initTabs();
  // Étape 5 : reveal, scroll-progress, active-link, lightbox...
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
