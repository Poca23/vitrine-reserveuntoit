export const initLightbox = () => {
  const dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Image agrandie");
  dialog.innerHTML = `
    <img class="lightbox__img" alt="">
    <button class="lightbox__close" type="button">Fermer</button>`;
  document.body.append(dialog);

  const img = dialog.querySelector(".lightbox__img");

  document.addEventListener("click", (event) => {
    const source = event.target.closest(".gallery__img, .device__img");
    if (!source) return;
    img.src = source.src;
    img.alt = source.alt;
    dialog.showModal();
  });

  // Fermeture : bouton ou clic sur le fond (Échap est géré par <dialog>)
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest(".lightbox__close")) {
      dialog.close();
    }
  });
};
