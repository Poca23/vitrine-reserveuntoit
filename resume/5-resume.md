# 📘 Synthèse mise à jour : Page vitrine ReserveUnToit

📅 **30 octobre 2026**

---

## 1. 🎯 Objectif

Créer une **page vitrine interactive** présentant ReserveUnToit (projet de certification DWM, Greta de Tours) sous forme de **guide narratif**, du cahier des charges à la conception finale. Le projet **n'est pas déployé** : la démonstration repose sur les visuels (Miro, Figma, UML, screenshots desktop/mobile/admin) et sur le récit du processus.

> **Accroche** : _« Trouvez votre prochain chez-vous temporaire en quelques clics ! »_

---

## 2. 👥 Cadrage

| Critère     | Choix                                                 |
| ----------- | ----------------------------------------------------- |
| Public      | Tout public (recruteurs, jury, développeurs, curieux) |
| Ton         | Créatif et visuel                                     |
| Hébergement | Netlify                                               |
| Stack       | HTML / CSS / JS **vanilla, zéro dépendance**          |
| Auteur      | Claire (Poca23), licence MIT                          |

---

## 3. 📖 Contenu à présenter

- **Concept** : plateforme de réservation de biens temporaires (l'utilisateur découvre, filtre, réserve ; l'administrateur gère le parc), rattachée au référentiel de certification.
- **Méthode** : Miro (gestion de projet : kanban par sprint, user stories, roadmap), Figma (maquettes desktop/mobile), VSCode, Git/GitHub (branches, Pull Requests).
- **6 sprints** : (1) Planification & Design (~1 sem.), (2) Planification & BDD (~1 sem.), (3) Backend & logique métier, (4) Frontend & interactivité, (5) Tests & livraison, (6) Backlog V2 (Stripe, avis, emails, SEO, performances, sécurité).
- **Conception** : UML (composants, déploiement, séquence, états, classes), Merise (MCD/MLD/MPD), BDD à 3 tables (`users`, `properties`, `bookings`) avec clés étrangères, index, migrations, seeders ; wireframes Figma.
- **Stack présentée** : Laravel 11 (PHP 8.1+), Livewire, Filament, TailwindCSS, MySQL/MariaDB, Composer, Node/NPM, Git.
- **Fonctionnalités** : utilisateur (inscription/connexion, catalogue filtré, calendrier dynamique, prix en temps réel, paiement simulé, modification/annulation, historique, responsive), admin Filament (dashboard, CRUD, rôles, filtres, rapports), moteur de réservation (disponibilités en temps réel, contraintes temporelles, prix dynamique, règles d'annulation).
- **Interfaces** : desktop (accueil, login/register, catalogue, détail, profil, admin : dashboard, édition, propriétés, réservations) et mobile (accueil, propriétés, détails, profil).

---

## 4. 🧭 Parcours narratif

| #   | Chapitre                                 | `id`           | Fragment               |
| --- | ---------------------------------------- | -------------- | ---------------------- |
| 0   | Hero                                     | `hero`         | `00-hero.html`         |
| 1   | Le besoin                                | `need`         | `01-need.html`         |
| 2   | L'organisation (timeline sprints)        | `organisation` | `02-organisation.html` |
| 3   | La conception (galerie UML/Merise/Figma) | `design`       | `03-design.html`       |
| 4   | Le build                                 | `build`        | `04-build.html`        |
| 5   | Le résultat (switch desktop/mobile)      | `result`       | `05-result.html`       |
| 6   | Les coulisses admin                      | `admin`        | `06-admin.html`        |
| 7   | La suite (backlog V2, leçons)            | `future`       | `07-future.html`       |

Chaque fragment commence par `<section id="...">` correspondant à ce tableau.

---

## 5. 🎨 Direction visuelle (validée)

- **Polices** : système uniquement, aucune requête externe.
- **Palette** : primaire `#1E40AF` (clair `#3B82F6`, foncé `#1E3A8A`), secondaire `#9333EA` (clair `#A855F7`, foncé `#7E22CE`), texte `#333333`. Ombres `--shadow-property` et `--shadow-property-hover`.
- **Variables en 2 couches** : palette brute, puis rôles (`--color-primary`, `-primary-light/-dark`, `-secondary(-light/-dark)`, `-bg`, `-text`, `-surface`, `-border`, `-on-primary`, `-overlay`), seuls utilisés ailleurs. Exception actuelle : `--white` utilisé dans `hero.css` (texte sur image sombre).
- **Thème** : clair par défaut, sombre automatique via `prefers-color-scheme`, sans JS ni bouton.
- **Variables disponibles** :
  - Espacements : `--space-1` à `-6`, `-8`, `-10`
  - Rayons : `--radius-sm/md/lg`
  - Typo : `--text-base/lg/xl/2xl/3xl`, `--leading`, `--weight-semibold/bold`, `--font-sans`
  - Autres : `--transition`, `--container-padding`, `--container-max`
  - Header : `--header-height`, `--logo-size`, `--toggle-size`, `--burger-*`, `--z-header`, `--z-skip`

---

## 6. ⚙️ Exigences techniques

| Exigence       | Règle                                                                             |
| -------------- | --------------------------------------------------------------------------------- |
| Taille         | Fichier **≤ 100 lignes** (scinder sinon)                                          |
| Responsabilité | Une seule par fichier                                                             |
| Approche       | Super mobile-first : 768 px, 1024 px (+ 640 et 1280 px pour le padding conteneur) |
| Valeurs        | Aucune couleur, espacement, z-index ni dimension en dur hors de `variables.css`   |
| Nommage        | BEM léger                                                                         |
| JS             | Modules ES, aucune variable globale                                               |
| Accessibilité  | `alt`, clavier, `prefers-reduced-motion`                                          |
| Imports CSS    | `@import url("...")` dans `main.css`                                              |

---

## 7. 🏗️ Architecture (validée)

- **Assemblage** : `fetch()` des fragments `sections/*.html` via `js/core/loader.js` (serveur local requis, ex. Live Server ; OK sur Netlify).
- **Arborescence** (21 dossiers, 56 fichiers) : `index.html`, `netlify.toml`, `css/` (base, layout, components, sections), `js/` (core, features, data), `sections/`, `assets/img/` (miro, figma, uml, desktop, mobile, brand), `resume/`.
- **Données séparées** dans `js/data/` (`sprints.js`, `gallery.js`).
- **Fichiers CSS déjà créés mais vides** (à remplir aux étapes suivantes) : `card`, `device-frame`, `gallery`, `lightbox`, `progress`, `tabs`, `timeline`, et `sections/` : `organisation`, `design`, `build`, `result`, `admin`, `future`.
- **Fichiers JS déjà créés mais vides** : `observer.js`, `active-link.js`, `device-switch.js`, `lightbox.js`, `reveal.js`, `scroll-progress.js`, `tabs.js`, `data/*`.

---

## 8. 🚦 Avancement

| #   | Étape                                                                                                    | Statut                 |
| --- | -------------------------------------------------------------------------------------------------------- | ---------------------- |
| 0   | Arborescence                                                                                             | ✅                     |
| 1   | Fondations CSS                                                                                           | ✅ Validée             |
| 2   | Squelette (`index.html`, `loader.js`, `main.js`, `dom.js`, `nav-toggle.js`, `header.css`, `nav.css`)     | ✅ Validée             |
| 3   | Hero et chapitre 1 (`button.css`, `section.css`, `hero.css`, `need.css`, `00-hero.html`, `01-need.html`) | ✅ **Validée**         |
| 4   | Chapitres 2 à 7                                                                                          | 🔜 **Prochaine étape** |
| 5   | Features (reveal, progression, active-link, lightbox, tabs, device-switch)                               | ⏳                     |
| 6   | Finitions (accessibilité, performance, `netlify.toml`)                                                   | ⏳                     |

**Rappels** :

- **Étape 2** : `lang="fr"`, lien d'évitement, header sticky, `<main id="main">`, `<noscript>`, script module. Logo image + texte dès 768 px, burger sous 1024 px, 7 liens. BEM `.header__*`, `.nav-toggle__*`, `.nav__*`.
- **Étape 3** : logo et fond du hero = `reserveuntoit-preview-bck.png` (552×452, `alt=""` décoratif, overlay `--color-overlay`). Bouton « Découvrir le projet » vers `#need`. Composants : `.button--primary/--secondary`, `.section`, `.section__title`, `.section__lead` (avec `scroll-margin-top: var(--header-height)`). Chapitre 1 : deux cartes (utilisateurs / administrateurs), 1 colonne mobile, 2 colonnes dès 768 px. Un seul `<h1>` (hero), `<h2>` par chapitre, `<h3>` pour les cartes.
- **`main.css`** importe actuellement : variables, reset, typography, container, header, nav, button, section, hero, need.

---

## 9. 🔜 Étape 4 : Chapitres 2 à 7 (à coder)

| Chapitre          | Fichiers                                                                         | Contenu prévu                                                                  |
| ----------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 2 Organisation    | `02-organisation.html`, `organisation.css`, `timeline.css`, `js/data/sprints.js` | Timeline des 6 sprints (données JS) + outils (Miro, Figma, VSCode, Git/GitHub) |
| 3 Conception      | `03-design.html`, `design.css`, `gallery.css`, `tabs.css`, `js/data/gallery.js`  | Galerie UML / Merise / Figma par onglets                                       |
| 4 Build           | `04-build.html`, `build.css`, `card.css`                                         | Stack (Laravel, Livewire, Filament, Tailwind, MySQL…) et fonctionnalités       |
| 5 Résultat        | `05-result.html`, `result.css`, `device-frame.css`                               | Captures desktop / mobile avec switch                                          |
| 6 Coulisses admin | `06-admin.html`, `admin.css`                                                     | Captures admin Filament (dashboard, édition, propriétés, réservations)         |
| 7 La suite        | `07-future.html`, `future.css`                                                   | Backlog V2 et leçons apprises                                                  |

Plus : mise à jour de `main.css` (nouveaux `@import`) et, si besoin, `main.js` (rendu des données sprints et galerie).

**À prévoir** : découper en sous-étapes pour rester ≤ 100 lignes par fichier ; `alt` descriptif pour chaque capture ; `loading="lazy"` sur les images sous le hero, avec `width`/`height`.

---

## 10. ❓ Points à valider avant l'étape 4

1. **Découpage** : livrer l'étape 4 en **3 lots** (A : chapitres 2-3 ; B : chapitres 4-5 ; C : chapitres 6-7), avec validation entre chaque ?
2. **Images** : les dossiers `assets/img/{miro,figma,uml,desktop,mobile}` sont vides. Peux-tu fournir **la liste des noms de fichiers** (ou un `tree` mis à jour) une fois les images ajoutées ? Sinon, j'utilise des noms provisoires que tu renommeras.
3. **Timeline** : contenu des sprints rendu **via `js/data/sprints.js`** (injection JS) ou **en HTML statique** ? (proposition : JS, pour respecter la séparation données/affichage.)
4. **Onglets de la conception** : trois onglets **UML / Merise / Figma** : d'accord ? (`tabs.js` serait alors implémenté dans ce lot, ou reporté à l'étape 5 avec un affichage sans onglets en attendant ?)
5. **Chapitre 7** : contenu des « leçons apprises » : à rédiger par moi à partir des résumés, ou tu me donnes 3-4 points personnels ?

---

## 11. 🤝 Règles de collaboration

- Code uniquement, aucun fichier généré sauf demande explicite
- Commandes git en anglais, simples, en fin d'étape
- Validation de Claire avant chaque étape suivante
- Date rappelée à chaque échange

---

✅ **Claire, valides-tu cette synthèse et réponds-tu aux 5 points pour que je livre le lot A de l'étape 4 ?**
