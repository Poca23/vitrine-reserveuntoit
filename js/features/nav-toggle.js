import { $, $$ } from "../core/dom.js";

const DESKTOP_QUERY = "(min-width: 1024px)";

/** Menu burger : actif sous 1024 px (mobile et tablette). */
export const initNavToggle = () => {
  const button = $(".nav-toggle");
  const nav = $("#nav");
  if (!button || !nav) return;

  const desktop = window.matchMedia(DESKTOP_QUERY);

  const isOpen = () => button.getAttribute("aria-expanded") === "true";

  const setOpen = (open) => {
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Fermer le menu" : "Ouvrir le menu",
    );
    nav.classList.toggle("nav--open", open);
  };

  button.addEventListener("click", () => setOpen(!isOpen()));

  // Ferme au clic sur un lien
  $$(".nav__link", nav).forEach((link) =>
    link.addEventListener("click", () => setOpen(false)),
  );

  // Ferme avec Échap et rend le focus au bouton
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      button.focus();
    }
  });

  // Réinitialise en passant en desktop
  desktop.addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
};
