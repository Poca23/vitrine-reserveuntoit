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

Plateforme de réservation de biens immobiliers temporaires : l'utilisateur découvre, filtre et réserve en ligne ; l'administrateur gère le parc. Projet de formation rattaché au référentiel de certification.

### 3.2 Méthode de travail

| Phase             | Outil            | Usage                                                         |
| ----------------- | ---------------- | ------------------------------------------------------------- |
| Gestion de projet | **Miro**         | Kanban par sprint, user stories, roadmap, critères, livrables |
| Maquettage        | **Figma**        | Maquettes desktop et mobile                                   |
| Développement     | **VSCode**       | IDE principal                                                 |
| Versionning       | **Git / GitHub** | Branches de fonctionnalités, Pull Requests                    |

### 3.3 Les 6 sprints

1. **Planification & Design**: cahier des charges, diagrammes, maquettes
2. **Planification & Base de données**: MCD/MLD/MPD, migrations
3. **Backend & Logique métier**: modèles, authentification, API, réservation
4. **Frontend & Interactivité**: intégration, Livewire, calendrier dynamique
5. **Tests & Livraison**: tests, bugs, optimisations, documentation
6. **Backlog V2**: Stripe, avis/notation, emails, SEO, performances, sécurité

### 3.4 Conception

- **UML** : composants, déploiement, séquence, états, classes (`User`, `Property`, `Booking`)
- **Merise** : MCD / MLD / MPD
- **BDD** : 3 tables (`users`, `properties`, `bookings`), clés étrangères, index, migrations, seeders
- **Maquettes** : wireframes Figma desktop et mobile

### 3.5 Stack du projet présenté

Laravel 11 (PHP 8.1+), Livewire, Filament, TailwindCSS, MySQL/MariaDB, Composer, Node/NPM, Git.

### 3.6 Fonctionnalités

- **Utilisateur** : inscription/connexion, catalogue filtré, calendrier dynamique, prix en temps réel, paiement simulé, historique, 100 % responsive
- **Administrateur (Filament)** : dashboard, CRUD propriétés et réservations, utilisateurs/rôles, filtres, rapports
- **Moteur de réservation** : disponibilités en temps réel, contraintes temporelles, prix dynamique, règles de modification/annulation

### 3.7 Interfaces réalisées

- **Desktop** : accueil, login/register, catalogue, détail, profil, admin
- **Mobile** : accueil, propriétés, détails, profil

---

## 4. 🧭 Parcours narratif (7 chapitres)

1. Le besoin
2. L'organisation (timeline des sprints)
3. La conception (galerie UML / Merise / Figma)
4. Le build
5. Le résultat (switch desktop/mobile)
6. Les coulisses admin
7. La suite (backlog V2, leçons apprises)

---

## 5. 🎨 Direction visuelle (nouveau)

### 5.1 Polices

**Polices système uniquement** : le plus léger, aucune requête externe, aucun fichier dans `assets/fonts/` (dossier laissé vide ou supprimé).

> Remarque : l'application d'origine utilise Figtree, mais ce n'est pas repris ici, par choix de légèreté.

### 5.2 Palette reprise de ReserveUnToit

| Rôle             | Valeur    | Usage                       |
| ---------------- | --------- | --------------------------- |
| **Primaire**     | `#1E40AF` | Titres, liens, boutons      |
| Primaire clair   | `#3B82F6` | Hover                       |
| Primaire foncé   | `#1E3A8A` | Hover appuyé, fonds sombres |
| **Secondaire**   | `#9333EA` | Accents, mises en avant     |
| Secondaire clair | `#A855F7` | Hover                       |
| Secondaire foncé | `#7E22CE` | Hover appuyé                |
| Texte            | `#333333` | Corps de texte              |

Ombres reprises de l'app : `--shadow-property` et `--shadow-property-hover`. Le hero d'origine utilise un dégradé noir à 50 % sur une photo ; on garde l'idée avec une de vos images.

### 5.3 Palettes faciles à changer

Principe en **deux couches** dans `variables.css` :

1. **Couche « palette »** : les valeurs brutes (`--blue-800`, `--purple-600`...), le seul endroit où l'on touche pour changer de couleurs.
2. **Couche « rôles »** (`--color-primary`, `--color-bg`, `--color-text`, `--color-surface`...) : les seules variables utilisées dans le reste du CSS.

Pour changer d'ambiance, on modifie uniquement la couche palette, ou on active un thème via un attribut sur `<html>`.

**Thème clair ou sombre « au choix »** : le thème clair est la base, et un thème sombre s'active avec `[data-theme="dark"]`. Il ne redéfinit que les variables de rôles (fond, surface, texte, bordures). Le sombre est aussi appliqué automatiquement via `prefers-color-scheme` tant que l'utilisateur n'a rien choisi. Un bouton de bascule pourra s'ajouter plus tard (`js/features/theme-toggle.js`, à valider).

---

## 6. ⚙️ Exigences techniques impératives

| Exigence          | Règle                                                        |
| ----------------- | ------------------------------------------------------------ |
| 📏 Taille         | Chaque fichier **≤ 100 lignes**                              |
| 🎯 Responsabilité | **Une seule** par fichier                                    |
| 📱 Approche       | **Super mobile-first**, tablette ≥ 768 px, desktop ≥ 1024 px |
| 🎨 Valeurs        | Aucune couleur ni espacement en dur hors de `variables.css`  |
| 🏷️ Nommage        | BEM léger                                                    |
| 🧩 JS             | Modules ES, aucune variable globale                          |
| ♿ Accessibilité  | `alt` obligatoire, clavier, `prefers-reduced-motion`         |
| 🔧 Qualités       | Responsivité, scalabilité, maintenabilité, robustesse        |

---

## 7. 🏗️ Architecture (validée) et état d'avancement

- **Assemblage** : option A, `fetch()` des fragments `sections/*.html` via `js/core/loader.js`.
- **Arborescence** : créée en local (21 dossiers, 50 fichiers, vides pour l'instant), avec les résumés rangés dans `resume/`.
- **Ordre de développement** :
  1. ✅ Arborescence créée
  2. 🔜 **Étape 1 : Fondations CSS**
  3. Squelette (`index.html`, `loader.js`, `main.js`, header)
  4. Hero et premier chapitre
  5. Chapitres 1 à 7
  6. Features transverses
  7. Finitions

---

## 8. 🔜 Étape 1 : Fondations CSS (prête à coder)

| Fichier                | Contenu                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `css/main.css`         | Uniquement des `@import`                                                                                                                    |
| `base/variables.css`   | Palette, rôles, thème sombre, espacements, rayons, ombres, polices système, breakpoints (en commentaire, car non utilisables dans `@media`) |
| `base/reset.css`       | Reset minimal, `box-sizing`, images fluides                                                                                                 |
| `base/typography.css`  | Titres (couleur primaire, graisses 700/600), paragraphes, liens avec hover                                                                  |
| `layout/container.css` | Conteneur centré, padding fluide                                                                                                            |

Le padding du conteneur reprend les valeurs d'origine : 1 rem (mobile), 2 rem (≥ 640 px), 4 rem (≥ 1024 px), 5 rem (≥ 1280 px). Les valeurs 640 px et 1280 px s'ajoutent donc aux breakpoints, à signaler dans les variables.

---

## 9. 🤝 Règles de collaboration

- **Code uniquement** : aucun fichier généré sauf demande explicite
- **Commandes git** en anglais, simples et concises, à la fin de chaque étape
- **Validation de Claire** obligatoire avant chaque étape suivante
- **Date** rappelée à chaque échange

---

## ❓ Points à valider avant de coder l'étape 1

1. **Palette** : la liste du §5.2 vous convient-elle ?
2. **Thème sombre** : actif automatiquement selon le système, avec un bouton de bascule ajouté plus tard ? Ou faut-il rester en clair uniquement ?
3. **Padding du conteneur** : OK pour reprendre les valeurs de l'app d'origine (1 / 2 / 4 / 5 rem) ?

✅ **Claire, validez-vous cette synthèse pour que je livre les 5 fichiers de l'étape 1 ?**
