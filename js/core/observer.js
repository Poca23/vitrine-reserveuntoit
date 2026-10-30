/** Un seul IntersectionObserver partagé : on lui associe un callback par élément. */
const callbacks = new WeakMap();

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => callbacks.get(entry.target)?.(entry)),
  { threshold: 0.15 },
);

export const observe = (element, callback) => {
  callbacks.set(element, callback);
  observer.observe(element);
};

export const unobserve = (element) => {
  callbacks.delete(element);
  observer.unobserve(element);
};
