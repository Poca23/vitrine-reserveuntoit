import { $, $$ } from "../core/dom.js";
import { observe } from "../core/observer.js";

export const initActiveLink = () => {
  $$("main section[id]").forEach((section) => {
    const link = $(`.nav__link[href="#${section.id}"]`);
    if (!link) return;
    observe(section, ({ isIntersecting }) => {
      if (isIntersecting) {
        $$(".nav__link").forEach((item) =>
          item.removeAttribute("aria-current"),
        );
        link.setAttribute("aria-current", "true");
      }
    });
  });
};
