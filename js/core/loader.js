const SECTIONS = [
  "00-hero",
  "01-need",
  "02-organisation",
  "03-design",
  "04-build",
  "05-result",
  "06-admin",
  "07-future",
];

const fetchSection = async (name) => {
  const response = await fetch(`sections/${name}.html`);
  if (!response.ok) {
    throw new Error(`Section "${name}" introuvable (${response.status})`);
  }
  return response.text();
};

const errorMessage = (name) =>
  `<section class="container"><p role="alert">Impossible de charger la section « ${name} ».</p></section>`;

/**
 * Charge les fragments dans l'ordre et les injecte dans le conteneur.
 * Les requêtes sont parallèles, l'ordre d'affichage est conservé.
 */
export const loadSections = async (container) => {
  const results = await Promise.allSettled(SECTIONS.map(fetchSection));

  container.innerHTML = results
    .map((result, index) => {
      if (result.status === "fulfilled") return result.value;
      console.error(result.reason);
      return errorMessage(SECTIONS[index]);
    })
    .join("");
};
