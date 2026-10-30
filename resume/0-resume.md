# 📘 Synthèse complète et mise à jour : Page vitrine ReserveUnToit

📅 **30 octobre 2026**

---

## 1. 🎯 Objectif de la page

Créer une **page web vitrine interactive** qui présente ReserveUnToit (projet de certification DWM, Greta de Tours) sous forme de **guide narratif** : du cahier des charges jusqu'à la conception finale.

Le projet **n'est pas déployé** : la démonstration repose sur les **visuels** (Miro, Figma, UML, screenshots desktop/mobile/admin) et sur le **récit du processus**.

> **Accroche du projet** : _« Trouvez votre prochain chez-vous temporaire en quelques clics ! »_

---

## 2. 👥 Cadrage de la page

| Critère         | Choix                                                 |
| --------------- | ----------------------------------------------------- |
| **Public**      | Tout public (recruteurs, jury, développeurs, curieux) |
| **Ton**         | Créatif et visuel                                     |
| **Hébergement** | Netlify                                               |
| **Matériel**    | Complet : Miro, Figma, UML, screenshots, devices      |
| **Stack**       | HTML / CSS / JS **vanilla, zéro dépendance**          |
| **Auteur**      | Claire (Poca23) · Licence MIT                         |

---

## 3. 📖 Contenu à présenter : le projet ReserveUnToit

### 3.1 Concept

Plateforme de réservation de biens immobiliers temporaires : l'utilisateur découvre, filtre et réserve en ligne ; l'administrateur gère le parc. Projet de formation rattaché au référentiel de certification (front-end, back-end, intégration/déploiement, mini-jeu de pitch).

### 3.2 Méthode de travail

| Phase             | Outil            | Usage                                                                            |
| ----------------- | ---------------- | -------------------------------------------------------------------------------- |
| Gestion de projet | **Miro**         | Kanban par sprint, user stories, TODO, roadmap, critères d'évaluation, livrables |
| Maquettage        | **Figma**        | Maquettes desktop & mobile                                                       |
| Développement     | **VSCode**       | IDE principal                                                                    |
| Versionning       | **Git / GitHub** | Branches de fonctionnalités, Pull Requests                                       |

### 3.3 Les 6 sprints (Miro)

1. **Planification & Design** (~1 sem.) : cahier des charges, diagrammes, maquettes
2. **Planification & Base de données** (~1 sem.) : composants, MCD/MLD/MPD, migrations
3. **Backend & Logique métier** : modèles, authentification, API, réservation
4. **Frontend & Interactivité** : intégration, composants Livewire, calendrier dynamique
5. **Tests & Livraison** : tests, bugs, optimisations, documentation
6. **Backlog V2** : Stripe, avis/notation, emails, SEO/META, performances, sécurité serveur

### 3.4 Conception & modélisation

- **UML** : composants, déploiement, séquence (création de réservation), états (cycle de vie d'une réservation), classes (`User`, `Property`, `Booking`)
- **Merise** : MCD / MLD / MPD
- **BDD** : 3 tables (`users`, `properties`, `bookings`), clés étrangères, index sur `bookings`, migrations + seeders
- **Maquettes** : wireframes Figma desktop et mobile

### 3.5 Stack technique du projet

| Couche          | Technologie                  |
| --------------- | ---------------------------- |
| Framework       | Laravel 11 (PHP 8.1+)        |
| Front réactif   | Livewire                     |
| Administration  | Filament                     |
| Styles          | TailwindCSS                  |
| Base de données | MySQL / MariaDB              |
| Outils          | Composer, Node.js / NPM, Git |

### 3.6 Fonctionnalités

- **Utilisateur** : inscription/connexion, catalogue filtré, calendrier dynamique, prix en temps réel, paiement simulé, gestion/historique des réservations, 100 % responsive
- **Administrateur (Filament)** : dashboard statistiques, CRUD propriétés & réservations, gestion utilisateurs/rôles, filtres avancés, rapports
- **Moteur de réservation** : disponibilités en temps réel, contraintes temporelles, prix dynamique, règles de modification/annulation

### 3.7 Interfaces réalisées

- **Desktop** : accueil, login/register, catalogue, détail propriété, profil, admin (dashboard, édition, propriétés, réservations)
- **Mobile** : accueil, propriétés, détails, profil

---

## 4. 🧭 Parcours narratif de la page (7 chapitres)

1. **Le besoin** : cahier des charges, critères de certification
2. **L'organisation** : sprints Miro (timeline animée)
3. **La conception** : UML, Merise, Figma (galerie interactive)
4. **Le build** : stack et architecture
5. **Le résultat** : démo desktop/mobile (switch device)
6. **Les coulisses admin** : Filament
7. **La suite** : backlog V2 et leçons apprises

---

## 5. ⚙️ Exigences techniques impératives

| Exigence          | Règle                                                       |
| ----------------- | ----------------------------------------------------------- |
| 📏 Taille         | Chaque fichier **≤ 100 lignes**                             |
| 🎯 Responsabilité | **Une seule** par fichier                                   |
| 📱 Approche       | **Super mobile-first**, adaptation tablette et desktop      |
| 🔧 Qualités       | Super responsivité, scalabilité, maintenabilité, robustesse |

---

## 6. 🤝 Règles de collaboration

- **Code uniquement** : aucun fichier généré sauf demande explicite
- **Commandes git** en anglais, simples et concises, **à la fin de chaque étape**
- **Validation obligatoire** de Claire avant de passer à l'étape suivante
- **Date** rappelée et mise à jour à chaque échange

---

## 7. 🔜 Prochaine étape

Définir l'**architecture des fichiers** (arborescence HTML/CSS/JS modulaire respectant la limite de 100 lignes) avant toute écriture de code.

✅ **Claire, validez-vous cette synthèse pour passer à l'architecture ?**
