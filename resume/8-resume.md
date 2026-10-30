Le lot C me convient, avec une réserve : je n'avais pas relu le README pour rédiger les leçons. Je propose de les recaler dessus au début de l'étape 5 si tu le souhaites. Voici la synthèse mise à jour.

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
- **Règle de grille** : une grille centrée par `margin-inline: auto` doit avoir `width: 100%`, sinon elle se réduit au contenu et déborde. Les items de grille reçoivent `min-width: 0` ou les colonnes utilisent `minmax(0, 1fr)`.

**Variables ajoutées au fil des lots** : `--badge-size: 2.5rem` (lot A), `--device-desktop-max: 60rem` et `--device-mobile-max: 20rem` (lot B). Aucune ajoutée au lot C.

---

## 5. 🚦 Avancement

| Étape                                                         | Statut                                      |
| ------------------------------------------------------------- | ------------------------------------------- |
| 0 Arborescence                                                | ✅                                          |
| 1 Fondations CSS                                              | ✅ Validée                                  |
| 2 Squelette                                                   | ✅ Validée                                  |
| 3 Hero et chapitre 1                                          | ✅ Validée                                  |
| 4 Chapitres 2 à 7                                             | ✅ **Terminée** (lots A, B, C validés)      |
| → Lot A : chapitres 2-3                                       | ✅ Validé                                   |
| → Lot B : chapitres 4-5                                       | ✅ Validé (après correction du débordement) |
| → Lot C : chapitres 6-7                                       | ✅ **Validé**                               |
| **5 Features JS (reveal, progression, lien actif, lightbox)** | 🔜 **Prochain**                             |
| 6 Finitions (accessibilité, performance, `netlify.toml`)      | ⏳                                          |

### Livré au lot A

- **Données** : `js/data/sprints.js` (6 sprints), `js/data/gallery.js` (UML, Merise, Figma ; noms d'images provisoires).
- **JS** : `timeline.js` (injection de la timeline), `tabs.js` (onglets UML/Merise/Figma avec clavier et galerie).
- **HTML** : `02-organisation.html` (timeline + 4 outils), `03-design.html` (conteneur d'onglets).
- **CSS** : `timeline.css`, `tabs.css`, `gallery.css`, `organisation.css`, `design.css`.
- **Grilles** : timeline 1/2/3 colonnes, outils 1/2/4, galerie 1/2/3 (paliers 768 et 1024 px).

### Livré au lot B

- **Données** : `js/data/build.js` exporte `STACK` (7 cartes), `FEATURES` (3 cartes) et `SCREENS` (5 captures desktop, 4 mobile ; noms provisoires).
- **JS** : `features/build.js` (`initBuild()`), `features/device-switch.js` (`initDeviceSwitch()`, boutons Desktop / Mobile avec `aria-pressed`, listes permutées par `hidden`).
- **HTML** : `04-build.html` (`data-stack`, `data-features`), `05-result.html` (`data-device`).
- **CSS** : `card.css` (`.card` réutilisable), `build.css` (grille 1/2/3), `device-frame.css`, `result.css` (mobile 1/2/4 colonnes).
- **Correction** : débordement du chapitre 5 résolu par `width: 100%` sur `.device__list` et `.device__img`, et `min-width: 0` sur `.device__item`.

### Livré au lot C

- **Données** :
  - `js/data/admin.js` exporte `ADMIN` (4 captures : dashboard, édition, propriétés, réservations ; noms `admin-*.png` dans `assets/img/desktop/`, provisoires).
  - `js/data/future.js` exporte `BACKLOG` (6 cartes : Stripe, avis, emails, SEO, performances, sécurité) et `LESSONS` (4 cartes : sprints, conception avant code, outils adaptés, versionnement).
- **JS** : `js/features/future.js` : `initFuture()` injecte la galerie admin (`data-admin`) et les cartes (`data-backlog`, `data-lessons`). Appelé depuis `main.js` après `initDeviceSwitch()`.
- **HTML** : `06-admin.html` (liste `.gallery` réutilisée), `07-future.html` (deux grilles `.future__grid`).
- **CSS** : `future.css` (grille 1 colonne, puis 2 dès 768 px, avec `minmax(0, 1fr)`), importé dans `main.css`. `admin.css` reste vide, car `.gallery` suffit.
- **Réutilisation** : `.gallery` pour le chapitre 6, `.card` pour le chapitre 7. Aucune valeur en dur ajoutée.
- **Réserve** : les leçons ont été rédigées d'après la synthèse. Elles sont à recaler sur le README si besoin.

### État de l'arborescence

65 fichiers, 21 dossiers. Nouveaux fichiers au lot C : `js/data/admin.js`, `js/data/future.js`, `js/features/future.js`. Les dossiers d'images `miro`, `figma`, `uml`, `desktop`, `mobile` sont vides, seul `brand/reserveuntoit-preview-bck.png` existe.

**Fichiers encore vides** : `lightbox.css`, `progress.css`, `admin.css`, `observer.js`, `active-link.js`, `lightbox.js`, `reveal.js`, `scroll-progress.js`.

---

## 6. 🔜 Étape 5 : Features JS

| Feature          | Fichiers                                      | Rôle                                                                      |
| ---------------- | --------------------------------------------- | ------------------------------------------------------------------------- |
| Observer partagé | `core/observer.js`                            | Utilitaire `IntersectionObserver` réutilisé par les features ci-dessous   |
| Reveal           | `features/reveal.js`                          | Apparition des éléments au scroll, désactivée si `prefers-reduced-motion` |
| Progression      | `features/scroll-progress.js`, `progress.css` | Barre de progression de lecture                                           |
| Lien actif       | `features/active-link.js`                     | Surligne dans la nav le chapitre visible                                  |
| Lightbox         | `features/lightbox.js`, `lightbox.css`        | Agrandissement des captures et schémas, clavier (Échap, focus)            |

**Principes** :

- Un seul `IntersectionObserver` mutualisé dans `observer.js`.
- Initialisation depuis `main.js`, à l'emplacement du commentaire « Étape 5 ».
- Aucun CSS en dur : variables existantes, plus `--z-` si besoin (`--z-lightbox`) et `--progress-height`.
- Accessibilité : `prefers-reduced-motion`, clavier, `aria`.
- Piste facultative : mutualiser `need.css` avec `.card` (remplacer `need__card` par `card` dans `01-need.html`).

---

## 7. 📌 Décisions actées

1. Étape 4 en 3 lots (A, B, C) avec validation entre chaque : **oui**, terminée.
2. Images : noms provisoires, renommés ensuite par Claire.
3. Timeline : injection JS, simple et légère.
4. Onglets : trois (UML / Merise / Figma), simples et légers.
5. Leçons apprises : rédigées à partir du README, simples et concises.
6. Switch desktop/mobile : livré au lot B ; `device-switch.js` n'est plus à faire à l'étape 5.
7. Lots B et C validés par Claire.
8. Passage à l'étape 5 validé par Claire.

---

## 8. 🤝 Collaboration

- Code uniquement ; aucun fichier généré sauf demande explicite.
- Commandes git en anglais, simples, en fin d'étape.
- Validation de Claire avant l'étape suivante.
- Date rappelée à chaque échange.
- Précision sur le lieu et la manière de modifier ; solutions les plus simples, avec le moins de code possible.

**Commande git du lot C** (à exécuter si ce n'est pas déjà fait) :

```bash
git add .
git commit -m "feat: add admin gallery and future chapter (step 4, batch C)"
```

---

✅ **Claire, prête pour l'étape 5 ? Je commence par `observer.js` et `reveal.js`, puis la barre de progression, le lien actif et la lightbox, avec une validation entre chaque.**
