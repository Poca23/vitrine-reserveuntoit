import { $ } from "./core/dom.js";
import { loadSections } from "./core/loader.js";
import { initNavToggle } from "./features/nav-toggle.js";
import { initTimeline } from "./features/timeline.js";
import { initTabs } from "./features/tabs.js";
import { initBuild } from "./features/build.js";
import { initDeviceSwitch } from "./features/device-switch.js";
import { initFuture } from "./features/future.js";

const init = async () => {
  initNavToggle();
  await loadSections($("#main"));
  initTimeline();
  initTabs();
  initBuild();
  initDeviceSwitch();
  initFuture();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
