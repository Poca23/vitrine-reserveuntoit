# 📘 Synthèse mise à jour : Page vitrine ReserveUnToit

📅 **30 octobre 2026**

---

## 1. 🎯 Objectif de la page

Créer une **page web vitrine interactive** qui présente ReserveUnToit (projet de certification DWM, Greta de Tours) sous forme de **guide narratif** : du cahier des charges jusqu'à la conception finale.

Le projet **n'est pas déployé** : la démonstration repose sur les **visuels** (Miro, Figma, UML, screenshots desktop/mobile/admin) et sur le **récit du processus**.

> **Accroche** : _« Trouvez votre prochain chez-vous temporaire en quelques clics ! »_

---

## 2. 👥 Cadrage

| Critère         | Choix                                                 |
| --------------- | ----------------------------------------------------- |
| **Public**      | Tout public (recruteurs, jury, développeurs, curieux) |
| **Ton**         | Créatif et visuel                                     |
| **Hébergement** | Netlify                                               |
| **Matériel**    | Complet : Miro, Figma, UML, screenshots, devices      |
| **Stack**       | HTML / CSS / JS **vanilla, zéro dépendance**          |
| **Auteur**      | Claire (Poca23), licence MIT                          |

---

## 3. 📖 Contenu à présenter

### 3.1 Concept

Plateforme de réservation de biens immobiliers temporaires : l'utilisateur découvre, filtre et réserve en ligne ; l'administrateur gère le parc. Projet de formation rattaché au référentiel de certification (front-end, back-end, intégration/déploiement, mini-jeu de pitch).

### 3.2 Méthode de travail

| Phase             | Outil            | Usage                                                                            |
| ----------------- | ---------------- | -------------------------------------------------------------------------------- |
| Gestion de projet | **Miro**         | Kanban par sprint, user stories, TODO, roadmap, critères d'évaluation, livrables |
| Maquettage        | **Figma**        | Maquettes desktop et mobile                                                      |
| Développement     | **VSCode**       | IDE principal                                                                    |
| Versionning       | **Git / GitHub** | Branches de fonctionnalités, Pull Requests                                       |

### 3.3 Les 6 sprints

1. **Planification & Design** (~1 sem.) : cahier des charges, diagrammes, maquettes
2. **Planification & Base de données** (~1 sem.) : composants, MCD/MLD/MPD, migrations
3. **Backend & Logique métier** : modèles, authentification, API, réservation
4. **Frontend & Interactivité** : intégration, Livewire, calendrier dynamique
5. **Tests & Livraison** : tests, bugs, optimisations, documentation
6. **Backlog V2** : Stripe, avis/notation, emails, SEO/META, performances, sécurité serveur

### 3.4 Conception

- **UML** : composants, déploiement, séquence (création de réservation), états (cycle de vie), classes (`User`, `Property`, `Booking`)
- **Merise** : MCD / MLD / MPD
- **BDD** : 3 tables (`users`, `properties`, `bookings`), clés étrangères, index sur `bookings`, migrations, seeders
- **Maquettes** : wireframes Figma desktop et mobile

### 3.5 Stack du projet présenté

Laravel 11 (PHP 8.1+), Livewire, Filament, TailwindCSS, MySQL/MariaDB, Composer, Node/NPM, Git.

### 3.6 Fonctionnalités

- **Utilisateur** : inscription/connexion, catalogue filtré, calendrier dynamique, prix en temps réel, paiement simulé, historique, 100 % responsive
- **Administrateur (Filament)** : dashboard, CRUD propriétés et réservations, utilisateurs/rôles, filtres avancés, rapports
- **Moteur de réservation** : disponibilités en temps réel, contraintes temporelles, prix dynamique, règles de modification/annulation

### 3.7 Interfaces réalisées

- **Desktop** : accueil, login/register, catalogue, détail, profil, admin (dashboard, édition, propriétés, réservations)
- **Mobile** : accueil, propriétés, détails, profil

---

## 4. 🧭 Parcours narratif (hero + 7 chapitres)

| #   | Chapitre                                     | `id` d'ancre   | Fragment               |
| --- | -------------------------------------------- | -------------- | ---------------------- |
| 0   | Hero                                         | `hero`         | `00-hero.html`         |
| 1   | Le besoin                                    | `need`         | `01-need.html`         |
| 2   | L'organisation (timeline des sprints)        | `organisation` | `02-organisation.html` |
| 3   | La conception (galerie UML / Merise / Figma) | `design`       | `03-design.html`       |
| 4   | Le build                                     | `build`        | `04-build.html`        |
| 5   | Le résultat (switch desktop/mobile)          | `result`       | `05-result.html`       |
| 6   | Les coulisses admin                          | `admin`        | `06-admin.html`        |
| 7   | La suite (backlog V2, leçons apprises)       | `future`       | `07-future.html`       |

Chaque fragment doit commencer par `<section id="...">` correspondant à ce tableau.

---

## 5. 🎨 Direction visuelle (validée)

### 5.1 Polices

**Polices système uniquement** (`system-ui`, etc.) : aucune requête externe, `assets/fonts/` inutile.

### 5.2 Palette reprise de ReserveUnToit

| Rôle           | Valeur                                       |
| -------------- | -------------------------------------------- |
| **Primaire**   | `#1E40AF` (clair `#3B82F6`, foncé `#1E3A8A`) |
| **Secondaire** | `#9333EA` (clair `#A855F7`, foncé `#7E22CE`) |
| **Texte**      | `#333333`                                    |

Ombres reprises de l'app : `--shadow-property` et `--shadow-property-hover`. Le hero reprend l'idée du dégradé noir à 50 % sur une de vos images (visuel disponible : `assets/img/brand/reserveuntoit-preview-bck.png`).

### 5.3 Variables en deux couches (`variables.css`)

1. **Palette** : valeurs brutes (`--blue-800`, `--purple-600`...), seul endroit à modifier pour changer d'ambiance.
2. **Rôles** : `--color-primary`, `--color-bg`, `--color-text`, `--color-surface`, `--color-border`, `--color-on-primary`, `--color-overlay`..., seules variables utilisées ailleurs.

### 5.4 Thème

- **Clair par défaut**, **sombre automatique** via `prefers-color-scheme`, **sans JS ni bouton**.
- Pas de bloc `[data-theme="dark"]` pour l'instant ; ajoutable plus tard avec un éventuel `theme-toggle.js`.

### 5.5 Variables disponibles (référence pour les étapes suivantes)

- **Espacements** : `--space-1` (0.25rem), `-2` (0.5), `-3` (0.75), `-4` (1), `-5` (1.5), `-6` (2), `-8` (4), `-10` (5)
- **Rayons** : `--radius-sm`, `-md`, `-lg`
- **Typo** : `--text-base`, `-lg`, `-xl`, `-2xl`, `-3xl`, `--leading`, `--weight-semibold`, `--weight-bold`, `--font-sans`
- **Autres** : `--transition`, `--container-padding`, `--container-max`
- **Header (ajoutées à l'étape 2)** : `--header-height`, `--logo-size`, `--toggle-size`, `--burger-width`, `--burger-thickness`, `--burger-gap`, `--z-header`, `--z-skip`

---

## 6. ⚙️ Exigences techniques impératives

| Exigence          | Règle                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 📏 Taille         | Chaque fichier **≤ 100 lignes** (scinder sinon)                                                                               |
| 🎯 Responsabilité | **Une seule** par fichier                                                                                                     |
| 📱 Approche       | **Super mobile-first** : base mobile, tablette ≥ 768 px, desktop ≥ 1024 px (+ 640 px et 1280 px pour le padding du conteneur) |
| 🎨 Valeurs        | Aucune couleur, espacement, z-index ni dimension en dur hors de `variables.css`                                               |
| 🏷️ Nommage        | BEM léger                                                                                                                     |
| 🧩 JS             | Modules ES, aucune variable globale                                                                                           |
| ♿ Accessibilité  | `alt` obligatoire, clavier, `prefers-reduced-motion`                                                                          |
| 🔧 Qualités       | Responsivité, scalabilité, maintenabilité, robustesse                                                                         |
| 📥 Imports CSS    | Style `@import url("...")` dans `main.css`                                                                                    |

---

## 7. 🏗️ Architecture (validée)

- **Assemblage** : option A, `fetch()` des fragments `sections/*.html` via `js/core/loader.js` (nécessite un serveur local type Live Server ; OK sur Netlify).
- **Arborescence** (créée, 21 dossiers, 56 fichiers) : `index.html`, `netlify.toml`, `css/` (base, layout, components, sections), `js/` (core, features, data), `sections/` (00 à 07), `assets/img/` (miro, figma, uml, desktop, mobile, brand), `resume/` (0 à 4).
- **Données séparées** : contenu des sprints et liste des images dans `js/data/`.

---

## 8. 🚦 État d'avancement

| #   | Étape                                                                                                    | Statut                 |
| --- | -------------------------------------------------------------------------------------------------------- | ---------------------- |
| 0   | Arborescence créée                                                                                       | ✅                     |
| 1   | Fondations CSS (`main.css`, `variables.css`, `reset.css`, `typography.css`, `container.css`)             | ✅ Validée             |
| 2   | **Squelette** (`index.html`, `loader.js`, `main.js`, `dom.js`, `nav-toggle.js`, `header.css`, `nav.css`) | ✅ **Validée**         |
| 3   | **Hero et premier chapitre**                                                                             | 🔜 **Prochaine étape** |
| 4   | Chapitres 2 à 7                                                                                          | ⏳                     |
| 5   | Features transverses (reveal, progression, active-link, lightbox)                                        | ⏳                     |
| 6   | Finitions (accessibilité, performance, `netlify.toml`)                                                   | ⏳                     |

### Rappel de l'étape 2 validée

- **`index.html`** : `lang="fr"`, lien d'évitement, header sticky, `<main id="main">`, `<noscript>`, script `type="module"`.
- **Header** : logo image + texte dès 768 px, image seule en mobile ; **burger sous 1024 px** (mobile et tablette) ; **7 liens**, un par chapitre.
- **`header.css`** (cadre + marque) et **`nav.css`** (burger + liens) : découpage validé pour respecter les 100 lignes.
- **BEM** : `.header__*`, `.nav-toggle__*`, `.nav__*`.
- **`loader.js`** : `fetch()` parallèle des 8 fragments, ordre conservé, message d'erreur par section.
- **`nav-toggle.js`** : ouverture/fermeture, Échap, fermeture au clic sur un lien, reset au passage en desktop.
- **`main.js`** : initialise le menu, puis charge les sections.

---

## 9. 🔜 Étape 3 : Hero et premier chapitre (à coder)

| Fichier                     | Rôle                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------- |
| `sections/00-hero.html`     | `<section id="hero">` : accroche, image de fond avec dégradé noir 50 %, bouton d'appel |
| `css/sections/hero.css`     | Style du hero, mobile-first                                                            |
| `css/components/button.css` | Bouton réutilisable (primaire/secondaire)                                              |
| `css/layout/section.css`    | Espacement des sections, `scroll-margin-top: var(--header-height)`                     |
| `sections/01-need.html`     | `<section id="need">` : chapitre « Le besoin »                                         |
| `css/sections/need.css`     | Style du chapitre 1                                                                    |
| `css/main.css`              | Ajout des nouveaux `@import`                                                           |

**À prévoir** : `alt` sur chaque image, une seule balise `<h1>` (dans le hero), hiérarchie de titres respectée, image du hero optimisée (poids, `width`/`height`).

---

## 10. ❓ Points à valider avant de coder l'étape 3

1. **Logo** : `assets/img/brand/logo.svg` n'apparaît pas dans ton `tree` (seul `reserveuntoit-preview-bck.png` est présent). Quel fichier sert de logo (nom, format) ? Faut-il ajuster le `src` et le `favicon` dans `index.html` ?
2. **Image du hero** : utilise-t-on `reserveuntoit-preview-bck.png` comme fond avec le dégradé noir 50 % ?
3. **Bouton du hero** : vers quelle ancre ? (proposition : `#need`, « Découvrir le projet »)
4. **Contenu du chapitre 1** : je m'appuie sur le §3.1 (concept, référentiel de certification, public). D'accord, ou souhaites-tu d'autres éléments ?
5. **Ancrage sous le header sticky** : `scroll-margin-top: var(--header-height)` dans `section.css`. D'accord ?

---

## 11. 🤝 Règles de collaboration

- **Code uniquement** : aucun fichier généré sauf demande explicite
- **Commandes git** en anglais, simples et concises, à la fin de chaque étape
- **Validation de Claire** obligatoire avant chaque étape suivante
- **Date** rappelée à chaque échange

---

✅ **Claire, valides-tu cette synthèse (et réponds-tu aux 5 points ci-dessus) pour que je livre le code de l'étape 3 ?**
