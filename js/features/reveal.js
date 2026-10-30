import { $$ } from "../core/dom.js";
import { observe, unobserve } from "../core/observer.js";

const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

export const initReveal = () => {
  if (REDUCED) return;
  $$(".section .container > *").forEach((element) => {
    element.classList.add("reveal");
    observe(element, ({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      target.classList.add("reveal--visible");
      unobserve(target);
    });
  });
};
