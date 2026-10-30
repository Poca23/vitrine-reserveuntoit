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

## 4. 🧭 Parcours narratif (7 chapitres + hero)

1. Le besoin
2. L'organisation (timeline des sprints)
3. La conception (galerie UML / Merise / Figma)
4. Le build
5. Le résultat (switch desktop/mobile)
6. Les coulisses admin
7. La suite (backlog V2, leçons apprises)

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

Ombres reprises de l'app : `--shadow-property` et `--shadow-property-hover`. Le hero reprend l'idée du dégradé noir 50 % sur une image.

### 5.3 Variables en deux couches (`variables.css`)

1. **Palette** : valeurs brutes (`--blue-800`, `--purple-600`...), seul endroit à modifier pour changer d'ambiance.
2. **Rôles** : `--color-primary`, `--color-bg`, `--color-text`, `--color-surface`, `--color-border`..., seules variables utilisées ailleurs.

### 5.4 Thème (décision : le plus simple et léger)

- **Clair par défaut**, **sombre automatique** via `prefers-color-scheme`, **sans JS ni bouton**.
- Pas de bloc `[data-theme="dark"]` pour l'instant, ajoutable plus tard avec un éventuel `theme-toggle.js`.
- Ajouts à la palette pour la lisibilité en sombre : `--blue-200`, `--purple-300`.

---

## 6. ⚙️ Exigences techniques impératives

| Exigence          | Règle                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 📏 Taille         | Chaque fichier **≤ 100 lignes**                                                                                            |
| 🎯 Responsabilité | **Une seule** par fichier                                                                                                  |
| 📱 Approche       | **Super mobile-first** : base mobile, tablette ≥ 768 px, desktop ≥ 1024 px (+ 640 px et 1280 px pour le padding conteneur) |
| 🎨 Valeurs        | Aucune couleur ni espacement en dur hors de `variables.css`                                                                |
| 🏷️ Nommage        | BEM léger                                                                                                                  |
| 🧩 JS             | Modules ES, aucune variable globale                                                                                        |
| ♿ Accessibilité  | `alt` obligatoire, clavier, `prefers-reduced-motion`                                                                       |
| 🔧 Qualités       | Responsivité, scalabilité, maintenabilité, robustesse                                                                      |

---

## 7. 🏗️ Architecture (validée)

- **Assemblage** : option A, `fetch()` des fragments `sections/*.html` via `js/core/loader.js` (nécessite un serveur local type Live Server, OK sur Netlify).
- **Arborescence** : `index.html`, `netlify.toml`, `css/` (base, layout, components, sections), `js/` (core, features, data), `sections/` (00 à 07), `assets/img/` (miro, figma, uml, desktop, mobile, brand). Créée en local, résumés rangés dans `resume/`.
- **Données séparées** : contenu des sprints et liste des images dans `js/data/`.

---

## 8. 🚦 État d'avancement

| #   | Étape                                                                                            | Statut                   |
| --- | ------------------------------------------------------------------------------------------------ | ------------------------ |
| 0   | Arborescence créée                                                                               | ✅                       |
| 1   | **Fondations CSS** (`main.css`, `variables.css`, `reset.css`, `typography.css`, `container.css`) | ✅ **Livrée et validée** |
| 2   | **Squelette** (`index.html`, `loader.js`, `main.js`, header)                                     | 🔜 **Prochaine étape**   |
| 3   | Hero et premier chapitre                                                                         | ⏳                       |
| 4   | Chapitres 1 à 7                                                                                  | ⏳                       |
| 5   | Features transverses (reveal, progression, lightbox)                                             | ⏳                       |
| 6   | Finitions (accessibilité, performance, `netlify.toml`)                                           | ⏳                       |

### Rappel de l'étape 1 validée

- `main.css` : uniquement des `@import`.
- `variables.css` : palette, rôles, thème sombre auto, espacements, rayons, ombres, polices système, typographie, transition, `--container-padding` et `--container-max`, breakpoints en commentaire.
- `reset.css` : `box-sizing`, images fluides, `prefers-reduced-motion`.
- `typography.css` : titres en couleur primaire, liens avec hover/focus visible.
- `container.css` : padding fluide 1 / 2 / 4 / 5 rem (mobile, ≥ 640, ≥ 1024, ≥ 1280 px).

---

## 9. 🔜 Étape 2 : Squelette (à coder)

| Fichier                     | Rôle                                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| `index.html`                | `<head>` (meta, lien `css/main.css`), header, `<main>` vide, script `type="module"`               |
| `js/core/loader.js`         | `fetch()` des fragments `sections/*.html` dans l'ordre, injection dans `<main>`, gestion d'erreur |
| `js/main.js`                | Point d'entrée : charge les sections puis initialise les features                                 |
| `js/core/dom.js`            | Helpers `$` et `$$` (si nécessaire pour le header)                                                |
| `css/layout/header.css`     | Header sticky + navigation mobile-first                                                           |
| `js/features/nav-toggle.js` | Menu burger mobile (à confirmer dans cette étape)                                                 |

À prévoir : lien d'évitement (accessibilité), `lang="fr"`, ancres correspondant aux 7 chapitres.

---

## 10. 🤝 Règles de collaboration

- **Code uniquement** : aucun fichier généré sauf demande explicite
- **Commandes git** en anglais, simples et concises, à la fin de chaque étape
- **Validation de Claire** obligatoire avant chaque étape suivante
- **Date** rappelée à chaque échange

---

## ❓ Points à valider avant de coder l'étape 2

1. **Menu burger** : inclure `nav-toggle.js` dès l'étape 2, ou header simple (liens visibles, défilement horizontal sur mobile) pour rester léger ?
2. **Header** : logo texte « ReserveUnToit » seulement, ou avec une image dans `assets/img/brand/` ?
3. **Navigation** : 7 liens (un par chapitre) ou liste condensée ?

✅ **Claire, valides-tu cette synthèse pour que je livre le code de l'étape 2 ?**
