/** Sélectionne un élément (premier match). */
export const $ = (selector, scope = document) => scope.querySelector(selector);

/** Sélectionne tous les éléments, retourne un vrai tableau. */
export const $$ = (selector, scope = document) => [
  ...scope.querySelectorAll(selector),
];
