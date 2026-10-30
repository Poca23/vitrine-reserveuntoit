# 📘 Synthèse mise à jour : Page vitrine ReserveUnToit

📅 **30 octobre 2026**

---

## 1. 🎯 Objectif

Page vitrine interactive (HTML/CSS/JS vanilla, zéro dépendance, hébergement Netlify) présentant **ReserveUnToit**, projet de certification DWM (Greta de Tours), sous forme de guide narratif. Le projet n'est pas déployé : la démonstration repose sur les visuels (Miro, Figma, UML, captures) et le récit.

> **Accroche** : _« Trouvez votre prochain chez-vous temporaire en quelques clics ! »_

**Cadrage** : tout public, ton créatif et visuel, auteure Claire (Poca23), licence MIT.

---

## 2. 📖 Contenu à présenter

- **Concept** : réservation de biens temporaires. L'utilisateur découvre, filtre et réserve ; l'administrateur gère le parc.
- **Méthode** : Miro (kanban par sprint, user stories, roadmap), Figma, VSCode, Git/GitHub (branches, Pull Requests). 6 sprints.
- **Conception** : UML (composants, déploiement, séquence, états, classes), Merise (MCD/MLD/MPD), BDD à 3 tables (`users`, `properties`, `bookings`).
- **Stack** : Laravel 11 (PHP 8.1+), Livewire, Filament, TailwindCSS, MySQL/MariaDB, Composer, Node/NPM, Git.
- **Fonctionnalités** :
  - Utilisateur : inscription/connexion, catalogue filtré, calendrier dynamique, prix en temps réel, paiement simulé, modification/annulation, historique, responsive.
  - Admin Filament : dashboard, CRUD, rôles, filtres, rapports.
  - Moteur de réservation : disponibilités en temps réel, contraintes temporelles, prix dynamique, règles d'annulation.
- **Interfaces** : desktop (accueil, login/register, catalogue, détail, profil, admin) et mobile (accueil, propriétés, détails, profil).

---

## 3. 🧭 Parcours (8 sections)

| #   | Chapitre        | `id`           | Fragment               |
| --- | --------------- | -------------- | ---------------------- |
| 0   | Hero            | `hero`         | `00-hero.html`         |
| 1   | Le besoin       | `need`         | `01-need.html`         |
| 2   | L'organisation  | `organisation` | `02-organisation.html` |
| 3   | La conception   | `design`       | `03-design.html`       |
| 4   | Le build        | `build`        | `04-build.html`        |
| 5   | Le résultat     | `result`       | `05-result.html`       |
| 6   | Coulisses admin | `admin`        | `06-admin.html`        |
| 7   | La suite        | `future`       | `07-future.html`       |

Chaque fragment commence par `<section id="...">`.

---

## 4. 🎨 Règles clés

- **Polices** : système uniquement.
- **Palette** : primaire `#1E40AF`, secondaire `#9333EA`.
- **Variables CSS en 2 couches** (palette brute, puis rôles) ; aucune valeur en dur hors `variables.css` (traits fins `1px/2px/3px` et `50%` tolérés).
- **Thème** : clair par défaut, sombre via `prefers-color-scheme`.
- **Fichiers** : ≤ 100 lignes, une responsabilité chacun.
- **Mobile-first** : 768 px, 1024 px (+ 640 et 1280 px pour le padding du conteneur).
- **BEM léger**, modules JS ES sans variable globale, imports CSS via `@import url()` dans `main.css`.
- **Accessibilité** : `alt`, clavier, `prefers-reduced-motion`.
- **Adaptabilité** : texte et images s'adaptent sans déformation et restent lisibles sur toutes les tailles d'écran (grilles fluides, `width: 100%` ou `max-width: 100%`, `aspect-ratio`, `object-fit: contain`, `overflow-wrap`, unités `rem`).
- **Règle de grille (apprise au lot B)** : une grille centrée par `margin-inline: auto` doit avoir `width: 100%`, sinon elle se réduit au contenu et déborde. Les items de grille reçoivent `min-width: 0` ou les colonnes utilisent `minmax(0, 1fr)`.

**Variables ajoutées au fil des lots** : `--badge-size: 2.5rem` (lot A), `--device-desktop-max: 60rem` et `--device-mobile-max: 20rem` (lot B).

---

## 5. 🚦 Avancement

| Étape                                                      | Statut                                          |
| ---------------------------------------------------------- | ----------------------------------------------- |
| 0 Arborescence                                             | ✅                                              |
| 1 Fondations CSS                                           | ✅ Validée                                      |
| 2 Squelette                                                | ✅ Validée                                      |
| 3 Hero et chapitre 1                                       | ✅ Validée                                      |
| **4 Chapitres 2 à 7**                                      | 🔄 En cours                                     |
| → Lot A : chapitres 2-3                                    | ✅ Validé                                       |
| → Lot B : chapitres 4-5                                    | ✅ **Validé** (après correction du débordement) |
| → Lot C : chapitres 6-7                                    | 🔜 **Prochain**                                 |
| 5 Features JS (reveal, progression, active-link, lightbox) | ⏳                                              |
| 6 Finitions (accessibilité, performance, `netlify.toml`)   | ⏳                                              |

### Livré au lot A

- **Données** : `js/data/sprints.js` (6 sprints), `js/data/gallery.js` (UML, Merise, Figma ; noms d'images provisoires).
- **JS** : `timeline.js` (injection de la timeline), `tabs.js` (onglets UML/Merise/Figma avec clavier et galerie).
- **HTML** : `02-organisation.html` (timeline + 4 outils), `03-design.html` (conteneur d'onglets).
- **CSS** : `timeline.css`, `tabs.css`, `gallery.css`, `organisation.css`, `design.css`.
- **Grilles** : timeline 1/2/3 colonnes, outils 1/2/4, galerie 1/2/3 (paliers 768 et 1024 px).

### Livré au lot B

- **Données** : `js/data/build.js` exporte `STACK` (7 cartes), `FEATURES` (3 cartes) et `SCREENS` (5 captures desktop, 4 mobile ; noms provisoires).
- **JS** :
  - `js/features/build.js` : `initBuild()` injecte les cartes stack et fonctionnalités.
  - `js/features/device-switch.js` : `initDeviceSwitch()` affiche deux boutons Desktop / Mobile (`aria-pressed`) qui permutent deux listes (`hidden`). Dimensions `width`/`height` indicatives : 1280×800 et 390×844.
  - `main.js` appelle `initBuild()` et `initDeviceSwitch()` après `loadSections`.
- **HTML** : `04-build.html` (conteneurs `data-stack` et `data-features`), `05-result.html` (conteneur `data-device`).
- **CSS** :
  - `card.css` : composant réutilisable `.card`, `.card__title`, `.card__text`, `.card__list`.
  - `build.css` : grille 1/2/3 colonnes.
  - `device-frame.css` : boutons, listes, images (`width: 100%`, `height: auto`), `.device__item { min-width: 0 }`.
  - `result.css` : captures mobile en 1/2/4 colonnes (`minmax(0, 1fr)`), `max-width: var(--device-mobile-max)` et `aspect-ratio: 9 / 19` par item.
- **Correction appliquée** : débordement horizontal du chapitre 5, résolu par `width: 100%` sur `.device__list` et `.device__img`, et par `min-width: 0` sur `.device__item`.

### État de l'arborescence

61 fichiers, 21 dossiers. Nouveaux fichiers : `js/data/build.js`, `js/features/build.js`, `resume/6-resume.md`. Les dossiers d'images `miro`, `figma`, `uml`, `desktop`, `mobile` sont vides, seul `brand/reserveuntoit-preview-bck.png` existe.

**Fichiers encore vides** : `lightbox.css`, `progress.css`, `admin.css`, `future.css`, `observer.js`, `active-link.js`, `lightbox.js`, `reveal.js`, `scroll-progress.js`.

---

## 6. 🔜 Lot C : chapitres 6 et 7

| Chapitre          | Fichiers                       | Contenu                                                                           |
| ----------------- | ------------------------------ | --------------------------------------------------------------------------------- |
| 6 Coulisses admin | `06-admin.html`, `admin.css`   | Captures admin Filament : dashboard, édition, propriétés, réservations            |
| 7 La suite        | `07-future.html`, `future.css` | Backlog V2 (Stripe, avis, emails, SEO, performances, sécurité) et leçons apprises |

**Principes à reprendre du lot B** :

- Données JS dans `js/data/` (par exemple `admin.js` et `future.js`), injection par un module `features/`, appelé depuis `main.js`.
- Captures admin : cartes ou galerie réutilisant `.gallery` (déjà responsive) pour éviter du CSS en plus.
- Backlog et leçons : cartes `.card` réutilisées, grille simple 1/2 colonnes.
- Leçons apprises rédigées à partir du README (décision actée).
- `alt` descriptif, `loading="lazy"`, `width`/`height` sur chaque capture.
- Respecter la règle de grille (`width: 100%`, `minmax(0, 1fr)`).

**Piste de simplification** : mutualiser `need.css` avec `.card` (remplacer `need__card` par `card` dans `01-need.html`, puis supprimer la règle dupliquée dans `need.css`). Cette tâche reste facultative.

---

## 7. 📌 Décisions actées

1. Étape 4 en 3 lots (A, B, C) avec validation entre chaque : **oui**.
2. Images : noms provisoires, renommés ensuite par Claire.
3. Timeline : injection JS, simple et légère.
4. Onglets : trois (UML / Merise / Figma), simples et légers.
5. Leçons apprises (lot C) : rédigées à partir du README, simples et légères.
6. **Switch desktop/mobile : livré dans le lot B (option b)**. `device-switch.js` n'est donc plus à faire à l'étape 5.
7. **Lot B validé** par Claire, sous réserve du code et de l'interface vus.

---

## 8. 🤝 Collaboration

- Code uniquement ; aucun fichier généré sauf demande explicite.
- Commandes git en anglais, simples, en fin d'étape.
- Validation de Claire avant l'étape suivante.
- Date rappelée à chaque échange.
- Précision demandée sur le lieu et la manière de modifier ; solutions les plus simples, avec le moins de code possible.

**Commande git du lot B** (à exécuter si ce n'est pas déjà fait) :

```bash
git add .
git commit -m "feat: add build cards and desktop/mobile device switch (step 4, batch B)"
```

---

✅ **Claire, prête pour le lot C (chapitres 6 et 7) ? Une précision utile : pour les leçons apprises, je pars du README ; si vous avez 3 ou 4 points personnels à ajouter, donnez-les-moi avant.**
