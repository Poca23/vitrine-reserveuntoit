# 🏗️ Architecture des fichiers : Vitrine ReserveUnToit

📅 **30 octobre 2026**

Une seule page (`index.html`), 7 sections, 3 niveaux de CSS, JS en modules ES. Tout est vanilla, sans build, directement déployable sur Netlify.

---

## 1. 🌳 Arborescence complète

```
vitrine-reserveuntoit/
├── index.html                    # Squelette : head + <main> + liens (~40 l.)
├── netlify.toml                  # Config déploiement (~5 l.)
├── README.md
├── LICENSE
│
├── css/
│   ├── main.css                  # Point d'entrée : uniquement des @import
│   ├── base/
│   │   ├── variables.css         # Couleurs, espacements, polices, breakpoints
│   │   ├── reset.css             # Reset minimal
│   │   └── typography.css        # Titres, paragraphes, liens
│   ├── layout/
│   │   ├── container.css         # Conteneur centré + padding fluide
│   │   ├── section.css           # Gabarit commun des chapitres
│   │   └── header.css            # Header sticky + nav
│   ├── components/
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── timeline.css          # Sprints
│   │   ├── gallery.css           # Grille d'images
│   │   ├── lightbox.css          # Agrandissement d'image
│   │   ├── device-frame.css      # Cadre desktop/mobile
│   │   ├── tabs.css              # Onglets (UML/Merise/Figma)
│   │   └── progress.css          # Barre de progression de lecture
│   └── sections/
│       ├── hero.css
│       ├── need.css
│       ├── organisation.css
│       ├── design.css
│       ├── build.css
│       ├── result.css
│       ├── admin.css
│       └── future.css
│
├── js/
│   ├── main.js                   # Point d'entrée : importe et initialise
│   ├── core/
│   │   ├── dom.js                # Helpers $ et $$
│   │   └── observer.js           # IntersectionObserver réutilisable
│   ├── features/
│   │   ├── nav-toggle.js         # Menu burger mobile
│   │   ├── scroll-progress.js    # Barre de progression
│   │   ├── reveal.js             # Apparition au scroll
│   │   ├── active-link.js        # Lien actif selon la section
│   │   ├── tabs.js               # Onglets accessibles
│   │   ├── device-switch.js      # Bascule desktop/mobile
│   │   └── lightbox.js           # Agrandir/fermer une image
│   └── data/
│       ├── sprints.js            # Contenu des 6 sprints
│       └── gallery.js            # Liste des visuels (src, alt, légende)
│
├── sections/                     # Fragments HTML (1 par chapitre)
│   ├── 00-hero.html
│   ├── 01-need.html
│   ├── 02-organisation.html
│   ├── 03-design.html
│   ├── 04-build.html
│   ├── 05-result.html
│   ├── 06-admin.html
│   └── 07-future.html
│
└── assets/
    ├── img/
    │   ├── miro/                 # Sprints, MCD/MLD, livrables, critères
    │   ├── figma/                # Maquettes
    │   ├── uml/                  # Diagrammes
    │   ├── desktop/              # Screenshots desktop + admin
    │   ├── mobile/               # Screenshots mobile
    │   └── brand/                # Logo, favicon, og-image
    └── fonts/                    # Optionnel (sinon polices système)
```

---

## 2. 🔑 Décision clé : comment assembler les sections ?

Avec la limite de 100 lignes par fichier, `index.html` ne peut pas contenir les 7 chapitres. Deux options :

| Option                         | Principe                                                        | Avantage                    | Inconvénient                                                                            |
| ------------------------------ | --------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------- |
| **A. `fetch()` des fragments** | `main.js` charge `sections/*.html` et les injecte dans `<main>` | Zéro outil, fichiers courts | Nécessite un serveur (Live Server en local, OK sur Netlify) ; léger flash au chargement |
| **B. Tout dans `index.html`**  | Un seul fichier HTML                                            | Plus simple                 | Dépasse largement 100 lignes ❌                                                         |

**Recommandation : Option A.** Elle respecte la règle des 100 lignes, reste 100 % vanilla, et chaque chapitre devient un fichier indépendant et maintenable.

Un petit module `js/core/loader.js` (~25 lignes) s'ajoutera à `core/` pour charger les fragments dans l'ordre.

---

## 3. 📏 Règles de cohérence

| Règle                            | Application                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| **1 fichier = 1 responsabilité** | Un composant CSS = un fichier ; une feature JS = un fichier                                  |
| **≤ 100 lignes**                 | Si un fichier approche la limite, on le scinde                                               |
| **Mobile-first**                 | CSS écrit pour mobile par défaut, puis `@media (min-width: 768px)` et `(min-width: 1024px)`  |
| **Variables CSS**                | Toutes les valeurs (couleurs, espaces) dans `variables.css`, jamais en dur                   |
| **Nommage**                      | Classes en **BEM léger** (`.card`, `.card__title`, `.card--featured`)                        |
| **JS**                           | Modules ES (`type="module"`), aucune variable globale                                        |
| **Données séparées**             | Textes des sprints et liste des images dans `js/data/`, pas dans le HTML                     |
| **Accessibilité**                | `alt` obligatoire, navigation clavier (onglets, lightbox), `prefers-reduced-motion` respecté |

---

## 4. 📱 Breakpoints

| Nom          | Largeur    | Usage                               |
| ------------ | ---------- | ----------------------------------- |
| **Base**     | 0 → 767 px | Mobile (style par défaut)           |
| **Tablette** | ≥ 768 px   | Grilles 2 colonnes                  |
| **Desktop**  | ≥ 1024 px  | Grilles 3 colonnes, nav horizontale |

---

## 5. 🗺️ Correspondance chapitres ↔ fichiers

| Chapitre          | HTML                   | CSS                                       | JS spécifique                               |
| ----------------- | ---------------------- | ----------------------------------------- | ------------------------------------------- |
| Hero              | `00-hero.html`         | `hero.css`                                | :                                           |
| 1. Le besoin      | `01-need.html`         | `need.css`                                | :                                           |
| 2. L'organisation | `02-organisation.html` | `organisation.css` + `timeline.css`       | `data/sprints.js`                           |
| 3. La conception  | `03-design.html`       | `design.css` + `tabs.css` + `gallery.css` | `tabs.js`, `lightbox.js`, `data/gallery.js` |
| 4. Le build       | `04-build.html`        | `build.css`                               | :                                           |
| 5. Le résultat    | `05-result.html`       | `result.css` + `device-frame.css`         | `device-switch.js`                          |
| 6. Admin          | `06-admin.html`        | `admin.css`                               | :                                           |
| 7. La suite       | `07-future.html`       | `future.css`                              | :                                           |

---

## 6. 🔁 Ordre de développement proposé

1. **Fondations** : `variables.css`, `reset.css`, `typography.css`, `container.css`
2. **Squelette** : `index.html`, `loader.js`, `main.js`, header + nav
3. **Hero** + premier chapitre pour valider le flux complet
4. **Chapitres 1 à 7** un par un
5. **Features transverses** : reveal, progression, lightbox
6. **Finitions** : accessibilité, performance, `netlify.toml`

---

## 7. 💻 Commandes git de cette étape

```bash
git init vitrine-reserveuntoit
cd vitrine-reserveuntoit
git add .
git commit -m "docs: define project architecture"
```

---

## ❓ Points à valider avant de coder

1. **Assemblage par `fetch()`** de fragments HTML : OK pour vous ? (alternative : tout garder dans `index.html` mais ça casse la règle des 100 lignes)
2. **Arborescence** ci-dessus : souhaitez-vous retirer ou ajouter des éléments ?
3. **Polices** : polices système (le plus léger) ou une Google Font (ex. Inter) ?

✅ **Claire, validez-vous cette architecture pour passer à l'étape 1 (fondations CSS) ?**
