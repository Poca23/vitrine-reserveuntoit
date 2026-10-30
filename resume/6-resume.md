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
- **Adaptabilité (nouvelle consigne)** : texte et images doivent s'adapter sans déformation et rester lisibles sur toutes les tailles d'écran (grilles fluides, `max-width: 100%`, `aspect-ratio`, `object-fit: contain`, `overflow-wrap`, unités `rem`).

**Variables ajoutées au fil des lots** : `--badge-size: 2.5rem` (lot A).

---

## 5. 🚦 Avancement

| Étape                                                                     | Statut          |
| ------------------------------------------------------------------------- | --------------- |
| 0 Arborescence                                                            | ✅              |
| 1 Fondations CSS                                                          | ✅ Validée      |
| 2 Squelette                                                               | ✅ Validée      |
| 3 Hero et chapitre 1                                                      | ✅ Validée      |
| **4 Chapitres 2 à 7**                                                     | 🔄 En cours     |
| → Lot A : chapitres 2-3                                                   | ✅ **Validé**   |
| → Lot B : chapitres 4-5                                                   | 🔜 **Prochain** |
| → Lot C : chapitres 6-7                                                   | ⏳              |
| 5 Features JS (reveal, progression, active-link, lightbox, device-switch) | ⏳              |
| 6 Finitions (accessibilité, performance, `netlify.toml`)                  | ⏳              |

### Livré au lot A

- **Données** : `js/data/sprints.js` (6 sprints), `js/data/gallery.js` (groupes UML, Merise, Figma ; noms d'images provisoires).
- **JS** : `js/features/timeline.js` (nouveau, injection de la timeline) et `js/features/tabs.js` (onglets UML/Merise/Figma avec clavier et galerie). `main.js` appelle `initTimeline()` et `initTabs()` après `loadSections`.
- **HTML** : `02-organisation.html` (timeline + 4 outils), `03-design.html` (conteneur d'onglets).
- **CSS** : `timeline.css`, `tabs.css`, `gallery.css`, `organisation.css`, `design.css`. `main.css` mis à jour.
- **Grilles** : timeline 1/2/3 colonnes, outils 1/2/4, galerie 1/2/3 (aux paliers 768 et 1024 px).

### État de l'arborescence

58 fichiers, 21 dossiers. Les dossiers d'images `miro`, `figma`, `uml`, `desktop`, `mobile` sont vides, seul `brand/reserveuntoit-preview-bck.png` existe. Le dossier `resume/` contient `0` à `5-resume.md`.

**Fichiers encore vides** : `card.css`, `device-frame.css`, `lightbox.css`, `progress.css`, `build.css`, `result.css`, `admin.css`, `future.css`, `observer.js`, `active-link.js`, `device-switch.js`, `lightbox.js`, `reveal.js`, `scroll-progress.js`.

---

## 6. 🔜 Lot B : chapitres 4 et 5

| Chapitre   | Fichiers                                           | Contenu                                                                                                                     |
| ---------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 4 Build    | `04-build.html`, `build.css`, `card.css`           | Cartes stack (Laravel, Livewire, Filament, Tailwind, MySQL…) et fonctionnalités (utilisateur, admin, moteur de réservation) |
| 5 Résultat | `05-result.html`, `result.css`, `device-frame.css` | Captures desktop / mobile avec switch                                                                                       |

**Décisions déjà actées** :

- Simplicité et légèreté avant tout.
- Noms d'images provisoires, que Claire renommera.
- `alt` descriptif, `loading="lazy"`, `width`/`height` sur chaque capture.
- Le switch desktop/mobile : `device-switch.js` relève de l'étape 5. Pour le lot B, deux options :
  - **a)** affichage des deux vues côte à côte sans JS ;
  - **b)** switch minimal livré dans le lot.

  Proposition : **b)**, comme pour les onglets au lot A.

- Cartes réutilisables via `card.css` (déjà utilisée par `need.css` si pertinent, à vérifier).

---

## 7. 📌 Décisions actées

1. Étape 4 en 3 lots (A, B, C) avec validation entre chaque : **oui**.
2. Images : noms provisoires, renommés ensuite par Claire.
3. Timeline : injection JS, simple et légère.
4. Onglets : trois (UML / Merise / Figma), simples et légers.
5. Leçons apprises (lot C) : rédigées à partir du README, simples et légères.

---

## 8. 🤝 Collaboration

- Code uniquement ; aucun fichier généré sauf demande explicite.
- Commandes git en anglais, simples, en fin d'étape.
- Validation de Claire avant l'étape suivante.
- Date rappelée à chaque échange.

**Commande git du lot A** (à exécuter si ce n'est pas déjà fait) :

```bash
git add .
git commit -m "feat: add organisation timeline and design tabs gallery (step 4, batch A)"
```

---

✅ **Claire, un seul point à trancher avant le lot B : switch desktop/mobile minimal dans ce lot (option b, ma proposition) ou reporté à l'étape 5 ?** Sans réponse, je pars sur l'option b.
