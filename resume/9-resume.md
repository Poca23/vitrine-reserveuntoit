📅 30 octobre 2026

Voici la synthèse mise à jour. J'ai retenu la leçon 3 dans sa version actuelle (« deux outils qui évitent de tout recoder »), puisque tu valides le lot E sans demander la version strictement factuelle.

---

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

**Variables ajoutées au fil des lots** :

- Étape 4 : `--badge-size: 2.5rem` (lot A), `--device-desktop-max: 60rem` et `--device-mobile-max: 20rem` (lot B).
- Étape 5 : `--progress-height: 4px` et `--z-progress: 150` (lot B), `--z-lightbox: 300` (lot D).

---

## 5. 🚦 Avancement

| Étape                                                        | Statut                               |
| ------------------------------------------------------------ | ------------------------------------ |
| 0 Arborescence                                               | ✅                                   |
| 1 Fondations CSS                                             | ✅ Validée                           |
| 2 Squelette                                                  | ✅ Validée                           |
| 3 Hero et chapitre 1                                         | ✅ Validée                           |
| 4 Chapitres 2 à 7 (lots A, B, C)                             | ✅ Validée                           |
| 5 Features JS                                                | ✅ **Terminée** (lots A à E validés) |
| → Lot A : observer partagé et reveal                         | ✅ Validé                            |
| → Lot B : barre de progression                               | ✅ Validé                            |
| → Lot C : lien actif dans la nav                             | ✅ Validé                            |
| → Lot D : lightbox                                           | ✅ Validé                            |
| → Lot E : leçons recalées sur le README                      | ✅ Validé                            |
| **6 Finitions (accessibilité, performance, `netlify.toml`)** | 🔜 **Prochain**                      |

### Livré à l'étape 4 (rappel)

- **Lot A** : `sprints.js`, `gallery.js`, `timeline.js`, `tabs.js` (onglets UML/Merise/Figma avec clavier), chapitres 2 et 3, grilles timeline 1/2/3, outils 1/2/4, galerie 1/2/3.
- **Lot B** : `build.js` (données et feature), `device-switch.js` (boutons Desktop / Mobile avec `aria-pressed`, listes permutées par `hidden`), `card.css` (`.card` réutilisable), chapitres 4 et 5. Débordement corrigé par `width: 100%` et `min-width: 0`.
- **Lot C** : `admin.js`, `future.js` (données et feature), galerie admin via `.gallery`, cartes via `.card`, `future.css` (grille 1 puis 2 colonnes dès 768 px, `minmax(0, 1fr)`), chapitres 6 et 7.

### Livré à l'étape 5

- **Lot A** : `core/observer.js` (un seul `IntersectionObserver` partagé, `threshold: 0.15`, API `observe()` / `unobserve()`), `features/reveal.js` (classes `.reveal` / `.reveal--visible` ajoutées par JS sur `.section .container > *`, désactivé si `prefers-reduced-motion`), `components/reveal.css`.
- **Lot B** : `features/scroll-progress.js` (barre `div.progress`, `aria-hidden`, `scaleX` selon le scroll, `passive`), `components/progress.css` (fixe, `z-index: var(--z-progress)`, couleur `--color-secondary`).
- **Lot C** : `features/active-link.js` (réutilise `observe()`, pose `aria-current="true"` sur le lien du chapitre visible), style `.nav__link[aria-current="true"]` ajouté à `nav.css` (couleur secondaire, semi-gras).
- **Lot D** : `features/lightbox.js` (un `<dialog>` natif créé par JS, `showModal()`, délégation de clic sur `.gallery__img` et `.device__img`, fermeture par Échap, bouton ou clic sur le fond), `components/lightbox.css` (fond via `--color-overlay`, `cursor: zoom-in` sur les images), import dans `main.css`.
- **Lot E** : leçons de `future.js` recalées. Leçon 3 : « Livewire pour l'interactivité, Filament pour l'administration : deux outils qui évitent de tout recoder. » Leçon 4 : « Une branche par fonctionnalité et des Pull Requests gardent un historique propre. » Leçons 1 et 2 inchangées.

### `main.js` (ordre d'initialisation actuel)

`initNavToggle()`, puis `await loadSections()`, puis `initTimeline()`, `initTabs()`, `initBuild()`, `initDeviceSwitch()`, `initFuture()`, `initReveal()`, `initScrollProgress()`, `initActiveLink()`, `initLightbox()`.

### État de l'arborescence

67 fichiers, 21 dossiers. Tous les fichiers JS et CSS prévus sont désormais remplis, sauf `admin.css` (volontairement vide, car `.gallery` suffit). Les dossiers d'images `miro`, `figma`, `uml`, `desktop`, `mobile` sont vides ; seul `brand/reserveuntoit-preview-bck.png` existe. `netlify.toml` est vide.

---

## 6. 🔜 Étape 6 : Finitions

| Chantier       | Points déjà identifiés                                                                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accessibilité  | Ouverture de la lightbox au clavier (non faite volontairement : images non focusables). Contrôle des contrastes, du focus visible et de l'ordre de tabulation. |
| Performance    | Images `loading="lazy"` déjà en place. À vérifier : poids des images, `fetchpriority` du hero, chargement des modules.                                         |
| `index.html`   | Le `<link rel="icon">` déclare `type="image/svg+xml"` alors que le fichier est un PNG : corriger en `image/png`.                                               |
| `netlify.toml` | Fichier vide à remplir (publication à la racine, en-têtes de cache et de sécurité simples).                                                                    |
| Images         | Ajouter et renommer les visuels dans `assets/img/*` (les noms dans les fichiers de données sont provisoires).                                                  |
| Facultatif     | Mutualiser `need.css` avec `.card` (remplacer `need__card` par `card` dans `01-need.html`).                                                                    |

---

## 7. 📌 Décisions actées

1. Étape 4 en 3 lots avec validation entre chaque : terminée.
2. Images : noms provisoires, renommés ensuite par Claire.
3. Timeline : injection JS, simple et légère.
4. Onglets : trois (UML / Merise / Figma), simples et légers.
5. Switch desktop/mobile livré au lot B de l'étape 4.
6. Étape 5 en 5 lots (A à E), tous validés par Claire.
7. Lightbox : élément natif `<dialog>`, ouverture à la souris et au toucher uniquement (ouverture au clavier reportée à l'étape 6, à confirmer).
8. Lien actif : attribut `aria-current` plutôt qu'une classe.
9. Leçons apprises recalées sur le README, avec la formulation « évitent de tout recoder » conservée pour la leçon 3.
10. Passage à l'étape 6 validé par Claire.

---

## 8. 🤝 Collaboration

- Code uniquement ; aucun fichier généré sauf demande explicite.
- Commandes git en anglais, simples, en fin d'étape.
- Validation de Claire avant l'étape suivante.
- Date rappelée à chaque échange.
- Précision sur le lieu et la manière de modifier ; solutions les plus simples, avec le moins de code possible.

**Commande git du lot E** (à exécuter si ce n'est pas déjà fait) :

```bash
git add .
git commit -m "docs: align lessons with README (step 5, batch E)"
```

---

✅ **Claire, prête pour l'étape 6 ? Je propose de commencer par les corrections rapides (icône de `index.html`, `netlify.toml`), puis l'accessibilité, puis la performance, avec une validation entre chaque. Dis-moi aussi si tu veux l'ouverture de la lightbox au clavier.**
